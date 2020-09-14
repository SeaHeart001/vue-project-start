<template>
  <div id="sample">
    <div
      id="myDiagramDiv"
      style="background-color: #34343C; border: solid 1px black; height: 570px;"
    ></div>
    
    <div>
      <div id="myInspector"></div>
    </div>
    
    <div>
      <div>
        <button id="SaveButton" @click="save()">Save</button>
        <button @click="loadGo()">Load</button>
      </div>
      <textarea id="mySavedModel" style="width:100%; height:270px;">
        { 
          "class": "go.TreeModel",
          "nodeDataArray": [
            {"key":1, "name":"庆帝", "title":"主题圈", "orgName":"庆国", "level":"皇帝", "relation": "庆国一哥"},
            {"key":2, "name":"范闲", "title":"朋友圈", "parent":1, "orgName":"检察院", "level":"提司", "relation": "儿子"},
            {"key":3, "name":"范思哲", "title":"亲戚圈", "parent":2, "orgName":"林家大院", "level":"搞笑担当", "relation": "傻弟弟"},
            {"key":4, "name":"范若若", "title":"朋友圈", "parent":1, "orgName":"林家大院", "level":"颜值担当", "relation": "妹妹"},
            {"key":5, "name":"腾子荆", "title":"朋友圈", "parent":4, "orgName":"检察院", "level":"护卫", "relation": "同事"},
            {"key":6, "name":"林宛儿", "title":"同事圈", "parent":2, "orgName":"丞相府", "level":"大小姐", "relation": "妻子"}
          ]
        }
      </textarea>
    </div>
  </div>
</template>

<script>
// http://www.mamicode.com/info-detail-2244228.html
export default {
  name: "friendCount",
  data(){
    return {
      myDiagram: null,
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init() {
      
      if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
      var $ = go.GraphObject.make;  // for conciseness in defining templates

      this.myDiagram =
        $(go.Diagram, "myDiagramDiv", // must be the ID or reference to div
          {
            maxSelectionCount: 1, // users can select only one part at a time
            validCycle: go.Diagram.CycleDestinationTree, // make sure users can only create trees
            // "clickCreatingTool.archetypeNodeData": { // allow double-click in background to create a new node
            //   name: "(new person)",
            //   title: "",
            // },
            "clickCreatingTool.insertPart": function(loc) {  // scroll to the new node
              var node = go.ClickCreatingTool.prototype.insertPart.call(this, loc);
              if (node !== null) {
                this.diagram.select(node);
                this.diagram.commandHandler.scrollToPart(node);
                this.diagram.commandHandler.editTextBlock(node.findObject("NAMETB"));
              }
              return node;
            },
            layout:
              $(go.TreeLayout,
                {
                  treeStyle: go.TreeLayout.StyleLastParents,
                  arrangement: go.TreeLayout.ArrangementHorizontal,
                  // properties for most of the tree:
                  angle: 90,
                  layerSpacing: 35,
                  // properties for the "last parents":
                  alternateAngle: 90,
                  alternateLayerSpacing: 35,
                  alternateAlignment: go.TreeLayout.AlignmentBus,
                  alternateNodeSpacing: 20
                }),
            "undoManager.isEnabled": true // enable undo & redo
          });

      // when the document is modified, add a "*" to the title and enable the "Save" button
      this.myDiagram.addDiagramListener("Modified", (e) => {
        var button = document.getElementById("SaveButton");
        if (button) button.disabled = !this.myDiagram.isModified;
        var idx = document.title.indexOf("*");
        if (this.myDiagram.isModified) {
          if (idx < 0) document.title += "*";
        } else {
          if (idx >= 0) document.title = document.title.substr(0, idx);
        }
      });

      // manage boss info manually when a node or link is deleted from the diagram
      this.myDiagram.addDiagramListener("SelectionDeleting", (e) => {
        var part = e.subject.first(); // e.subject is the this.myDiagram.selection collection,
        // so we'll get the first since we know we only have one selection
        this.myDiagram.startTransaction("clear boss");
        if (part instanceof go.Node) {
          var it = part.findTreeChildrenNodes(); // find all child nodes
          while (it.next()) { // now iterate through them and clear out the boss information
            var child = it.value;
            var bossText = child.findObject("boss"); // since the boss TextBlock is named, we can access it by name
            if (bossText === null) return;
            bossText.text = "";
          }
        } else if (part instanceof go.Link) {
          var child = part.toNode;
          var bossText = child.findObject("boss"); // since the boss TextBlock is named, we can access it by name
          if (bossText === null) return;
          bossText.text = "";
        }
        this.myDiagram.commitTransaction("clear boss");
      });

      var levelColors = ["#AC193D", "#2672EC", "#8C0095", "#5133AB",
        "#008299", "#D24726", "#008A00", "#094AB2"];

      // override TreeLayout.commitNodes to also modify the background brush based on the tree depth level
      this.myDiagram.layout.commitNodes = () => {
        go.TreeLayout.prototype.commitNodes.call(this.myDiagram.layout);  // do the standard behavior
        // then go through all of the vertexes and set their corresponding node's Shape.fill
        // to a brush dependent on the TreeVertex.level value
        this.myDiagram.layout.network.vertexes.each(function(v) {
          if (v.node) {
            var level = v.level % (levelColors.length);
            var color = levelColors[level];
            var shape = v.node.findObject("SHAPE");
            if (shape) shape.stroke = $(go.Brush, "Linear", { 0: color, 1: go.Brush.lightenBy(color, 0.05), start: go.Spot.Left, end: go.Spot.Right });
          }
        });
      };

      // when a node is double-clicked, add a child to it
      var nodeDoubleClick = (e, obj) => {
        //console.log(this, 'dbclick')
        var clicked = obj.part;
        if (clicked !== null) {
          var thisemp = clicked.data;
          this.myDiagram.startTransaction("add employee");
          //新加模块
          var newemp = {
            name: "(姓名)",
            title: "(圈名)",
            orgName: "(单位)",
            level: "(职位)",
            relation: "(关系)",
            parent: thisemp.key
          };
          this.myDiagram.model.addNodeData(newemp);
          this.myDiagram.commitTransaction("add employee");
        }
      }

      // this is used to determine feedback during drags
      function mayWorkFor(node1, node2) {
        if (!(node1 instanceof go.Node)) return false;  // must be a Node
        if (node1 === node2) return false;  // cannot work for yourself
        if (node2.isInTreeOf(node1)) return false;  // cannot work for someone who works for you
        return true;
      }

      // This function provides a common style for most of the TextBlocks.
      // Some of these values may be overridden in a particular TextBlock.
      function textStyle() {
        return { font: "9pt  Segoe UI,sans-serif", stroke: "white" };
      }

      // This converter is used by the Picture.
      function findHeadShot(key) {
        if (key < 0 || key > 16) return "images/HSnopic.jpg"; // There are only 16 images on the server
        return "images/HS" + key + ".jpg"
      }

      // define the Node template
      this.myDiagram.nodeTemplate =
        $(go.Node, "Auto",
          { doubleClick: nodeDoubleClick },
          { // handle dragging a Node onto a Node to (maybe) change the reporting relationship
            mouseDragEnter: function(e, node, prev) {
              var diagram = node.diagram;
              var selnode = diagram.selection.first();
              if (!mayWorkFor(selnode, node)) return;
              var shape = node.findObject("SHAPE");
              if (shape) {
                shape._prevFill = shape.fill;  // remember the original brush
                shape.fill = "darkred";
              }
            },
            mouseDragLeave: function(e, node, next) {
              var shape = node.findObject("SHAPE");
              if (shape && shape._prevFill) {
                shape.fill = shape._prevFill;  // restore the original brush
              }
            },
            mouseDrop: function(e, node) {
              var diagram = node.diagram;
              var selnode = diagram.selection.first();  // assume just one Node in selection
              if (mayWorkFor(selnode, node)) {
                // find any existing link into the selected node
                var link = selnode.findTreeParentLink();
                if (link !== null) {  // reconnect any existing link
                  link.fromNode = node;
                } else {  // else create a new link
                  diagram.toolManager.linkingTool.insertLink(node, node.port, selnode, selnode.port);
                }
              }
            }
          },
          // for sorting, have the Node.text be the data.name
          new go.Binding("text", "name"),
          // bind the Part.layerName to control the Node's layer depending on whether it isSelected
          new go.Binding("layerName", "isSelected", function(sel) { return sel ? "Foreground" : ""; }).ofObject(),
          // define the node's outer shape
          $(go.Shape, "Rectangle",
            {
              name: "SHAPE", fill: "#333333", stroke: 'white', strokeWidth: 3.5,
              // set the port properties:
              portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer"
            }),
          $(go.Panel, "Horizontal",
            
            $(go.Panel, "Table",
              {
                // minSize: new go.Size(130, NaN),
                // maxSize: new go.Size(150, NaN),
                margin: new go.Margin(10, 10, 10, 10),
                defaultAlignment: go.Spot.Left
              },
              //$(go.RowColumnDefinition, { column: 2, width: 4 }),

              $(go.TextBlock, textStyle(),  // the name
                {
                  row: 0, column: 0,
                  font: "12pt Segoe UI,sans-serif",
                  editable: true, isMultiline: false,
                  margin: new go.Margin(0, 0, 4, 0)
                  // minSize: new go.Size(55, 20),
                  // maxSize: new go.Size(160, 20),
                },
                new go.Binding("text", "name").makeTwoWay()),

              $(go.TextBlock, textStyle(),
                {
                  row: 0, column: 1,
                  editable: true, isMultiline: false,
                  // minSize: new go.Size(60, 20),
                  // maxSize: new go.Size(60, 20),
                  // minSize: new go.Size(10, 14),
                  margin: new go.Margin(0, 0, 0, 10)
                },
                new go.Binding("text", "title").makeTwoWay()),

                // $(go.TextBlock, "Title000: ", textStyle(),
              //   { row: 1, column: 0 }),
              $(go.TextBlock, textStyle(),
                {
                  row: 1, column: 0,
                  editable: true, isMultiline: false,
                  margin: new go.Margin(4, 0, 10, 0)
                },
                new go.Binding("text", "orgName").makeTwoWay()),

              $(go.TextBlock, textStyle(),
                {
                  row: 1, column: 1,
                  editable: true, isMultiline: false,
                  margin: new go.Margin(4, 0, 10, 10)
                },
                new go.Binding("text", "level").makeTwoWay()),

              $(go.TextBlock, "关系 : ", textStyle(),
                { row: 2, column: 0 }),
                
              $(go.TextBlock, textStyle(),
                { row: 2, column: 1, editable: true, isMultiline: false, },
                new go.Binding("text", "relation").makeTwoWay()),

            )  // end Table Panel
          ) // end Horizontal Panel
        );  // end Node

      // the context menu allows users to make a position vacant,
      // remove a role and reassign the subtree, or remove a department
      // 鼠标右键的配置
      this.myDiagram.nodeTemplate.contextMenu =
        $("ContextMenu",
          $("ContextMenuButton",
            $(go.TextBlock, "Vacate Position"),
            {
              click: (e, obj) => {
                var node = obj.part.adornedPart;
                if (node !== null) {
                  var thisemp = node.data;
                  this.myDiagram.startTransaction("vacate");
                  // update the key, name, and comments
                  this.myDiagram.model.setDataProperty(thisemp, "name", "(姓名)");
                  this.myDiagram.model.setDataProperty(thisemp, "title", "(圈名)");
                  this.myDiagram.model.setDataProperty(thisemp, "orgName", "(单位)");
                  this.myDiagram.model.setDataProperty(thisemp, "level", "(职位)");
                  this.myDiagram.model.setDataProperty(thisemp, "relation", "(关系)");
                  this.myDiagram.commitTransaction("vacate");
                }
              }
            }
          ),

          $("ContextMenuButton",
            $(go.TextBlock, "Remove Role"),
            {
              click: (e, obj) => {
                // reparent the subtree to this node's boss, then remove the node
                var node = obj.part.adornedPart;
                if (node !== null) {
                  this.myDiagram.startTransaction("reparent remove");
                  var chl = node.findTreeChildrenNodes();
                  // iterate through the children and set their parent key to our selected node's parent key
                  while (chl.next()) {
                    var emp = chl.value;
                    this.myDiagram.model.setParentKeyForNodeData(emp.data, node.findTreeParentNode().data.key);
                  }
                  // and now remove the selected node itself
                  this.myDiagram.model.removeNodeData(node.data);
                  this.myDiagram.commitTransaction("reparent remove");
                }
              }
            }
          ),
          $("ContextMenuButton",
            $(go.TextBlock, "Remove Department"),
            {
              click: (e, obj) => {
                // remove the whole subtree, including the node itself
                var node = obj.part.adornedPart;
                if (node !== null) {
                  this.myDiagram.startTransaction("remove dept");
                  this.myDiagram.removeParts(node.findTreeParts());
                  this.myDiagram.commitTransaction("remove dept");
                }
              }
            }
          )
        );

      // define the Link template
      this.myDiagram.linkTemplate =
        $(go.Link, go.Link.Orthogonal,
          { corner: 5, relinkableFrom: true, relinkableTo: true },
          $(go.Shape, { strokeWidth: 1.5, stroke: "#F5F5F5" }));  // the link shape

      // read in the JSON-format data from the "mySavedModel" element
      this.loadGo();


      // support editing the properties of the selected person in HTML
      if (window.Inspector) myInspector = new Inspector("myInspector", this.myDiagram,
        {
          properties: {
            "key": { readOnly: true },
            "comments": {}
          }
        });

    }, // end init

    // Show the diagram's model in JSON format
    save() {
      document.getElementById("mySavedModel").value = this.myDiagram.model.toJson();
      this.myDiagram.isModified = false;
    },

    loadGo() {
      this.myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
      // make sure new data keys are unique positive integers
      var lastkey = 1;
      this.myDiagram.model.makeUniqueKeyFunction = (model, data) => {
        var k = data.key || lastkey;
        while (model.findNodeDataForKey(k)) k++;
        data.key = lastkey = k;
        return k;
      };
    }
  }
};
</script>

<style>
</style>