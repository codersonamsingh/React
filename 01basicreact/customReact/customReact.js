
function customRender(reactElement, container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
}

const reactElement = {
    type:'a',
    props: {
        href: 'https://goole.com',
        target: 'blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')