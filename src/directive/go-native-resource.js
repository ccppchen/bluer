export default {
  bind: function(el, binding) {
    if (binding.value.jumpUrl) {
      el.addEventListener('click', function() {
        location.href = binding.value.jumpUrl
      }, false)
    }
  }
}
