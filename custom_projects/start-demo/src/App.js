
// -----------------------------------------------------------------------------------------------------------------------
// // 创建和嵌套组件
// // React 应用程序是由 组件 组成的。一个组件是 UI（用户界面）的一部分，它拥有自己的逻辑和外观。
// // 组件可以小到一个按钮，也可以大到整个页面。
// // React 组件是返回标签的 JavaScript 函数：
// function MyButton() {
//   return (<button>I am a button</button>)
// }

// // 至此，你已经声明了 MyButton，现在把它嵌套到另一个组件中：
// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome my app</h1>
//       <MyButton />
//     </div>
//   )
// }


// -----------------------------------------------------------------------------------------------------------------------
// // 示例2
// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// -----------------------------------------------------------------------------------------------------------------------
// // 示例3
// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product => 
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//       >
//         {product.title}
//     </li>
//   );

//   return(
//     <ul>{listItems}</ul>
//   )
// }

// -----------------------------------------------------------------------------------------------------------------------
// 示例4
// function MyButton() {
//   function handleClick() {
//     alert("click me");
//   }
//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   )
// }

// export default function MyApp() {
//   return (
//     <div>
//       <MyButton></MyButton>
//     </div>
//   )
// }


// // -----------------------------------------------------------------------------------------------------------------------
// // 示例5
// import {useState} from "react"

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Click {count} times
//     </button>
//   )
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters</h1>
//       <MyButton></MyButton>
//       <br></br>
//       <MyButton></MyButton>
//     </div>
//   )
// }


// -----------------------------------------------------------------------------------------------------------------------
// 示例6
import {useState} from "react"

function MyButton({count, onClick}) {
    return (
    <button onClick={onClick}>
      Click {count} times
    </button>
  )
}


export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  
  return (
     <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <br></br>
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}

