// understamnding how vite or babel does behind the magic and create elements and how react understand this element

const root = document.querySelector('#root')

// here we have created an object for element which we give in react component the jsx, but this jsx is not understandable by the react so here comes babel and vite which does behind the scene magic and parsed this jsx into not js object just how we written below,  we know that its not exact how they do but for understanding behind the magic
const customElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit google'
}

// this code is also for understanding like how the element is rendered
function customReactElementCreatingAndRendering(ele, renderingEle){
    // element creation and assigning props
    const element = document.createElement(ele.type)
    element.setAttribute('href', ele.props.href)
    element.setAttribute('target', ele.props.target)
    element.innerText = ele.children

    // element rendering in Reactdom and after that the main dom is compared and then is rendered to the actual browsers dom but this is js code so this will gets directly rendered to the actual dom
    renderingEle.appendChild(element)
}

customReactElementCreatingAndRendering(customElement, root)
