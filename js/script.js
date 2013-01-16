$(document).ready(function  () {
    $('#drag-column').shapeshift({
          // Features
          centerGrid: false,
          enableAnimation: true,
          enableAnimationOnInit: true,
          enableAutoHeight: false,
          enableDrag: true,
          enableDragAnimation: true,
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
        $('#drop-column').shapeshift();
        $('#delete-column').shapeshift();
});