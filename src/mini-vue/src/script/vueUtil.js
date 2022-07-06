export function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}

export function mount(vnode, container) {
  // el
  const el = document.createElement(vnode.tag);
  // props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      el.setAttribute(key, value);
    }
  }
  // children

  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      for (const child of vnode.children) {
        mount(child, el);
      }
    }
  }
  container.appendChild(el);
}

/**
 *
 * @param {vNode} n1  new vNode
 * @param {vNode} n2  old vNode
 */
export function patch(n1, n2) {
  const el = (n2.el = n1.el);
  if (n1.tag === n2.tag) {
    //props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};

    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];

      if (newValue !== oldValue) {
        el.setAttribute(key, newValue);
      }
    }

    // 删除props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        el.removeAttribute(key);
      }
    }

    // children
    const oldChildren = n1.children;
    const newChildren = n2.children;
    if (typeof newChildren === "string") {
      // newChild 为字符串
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.textContent = newChildren;
      }
    } else {
      // newChild 为数组
      if (typeof oldChildren === "string") {
        // newChildren为数组 oldChild为字符串
        el.innerHTML = "";
        newChildren.forEach((child) => {
          mount(child, el);
        });
      } else {
        // newChildren oldChildren都为数组

        // 公共部分长度
        const commonLength = Math.min(oldChildren.length, newChildren.length);

        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }

        if (newChildren.length > oldChildren.length) {
          newChildren.slice(commonLength).forEach((child) => {
            mount(child, el);
          });
        } else if (newChildren.length < oldChildren.length) {
          oldChildren.slice(commonLength).forEach((child) => {
            el.removeChild(child.el);
          });
        }
      }
    }
  } else {
  }
}

export default vue;
