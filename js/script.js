$(document).ready(function  () {
    $('#drag-column').shapeshift({
          // Features
          centerGrid: false,
          enableAnimation: true,
          enableAnimationOnInit: true,
          enableAutoHeight: false,
          enableDrag: true,
          enableDragAnimation: false,
          enableRearrange: true,
          enableResize: true,
          enableTrash: false,

          // Options
          animateSpeed: 150,
          columns: null,
          dragClone: true,
          dragRate: 100,
          dragWhitelist: "*",
          dropCutoff: 0,
          dropWhitelist: "*",
          gutterX: 10,
          gutterY: 10,
          minHeight: 200,
          paddingY: 0,
          paddingX: 0,
          selector: ""
        });
        $('#drop-column').shapeshift({
          enableDragAnimation: false
        });
        $('#delete-column').shapeshift({enableTrash:true});
});