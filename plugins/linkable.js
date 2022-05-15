export default (context, inject) => {
  inject('handleLinkable', handleLinkable)
}

function handleLinkable(component, linkType, linkId) {
  switch (linkType) {
    case 'product':
      component.$router.push('/products/' + linkId)
      break
    case 'category':
      component.$router.push('/products?category=' + linkId)
      break
    case 'shop':
      component.$router.push('/products?shop_id=' + linkId)
      break
    case 'brand':
      component.$router.push('/products?brand=' + linkId)
      break
    case 'url':
      component.window.open(linkId, '_blank')
      break
  }
}
