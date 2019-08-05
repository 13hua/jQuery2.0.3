// (function() {
//   var a = 10;
//   function $() {
//     console.log(a);
//   }
// })();

// alert(a); // 调不到
// $(); // 调不到

// 这样一来 出现了外部调不到内部变量的问题，所以需要对外提供使用内部局部变量的接口

(function() {
  var a = 10;
  function $() {
    console.log(a);
  }

  window.$ = $; //将函数挂载到window上
})();

$();
