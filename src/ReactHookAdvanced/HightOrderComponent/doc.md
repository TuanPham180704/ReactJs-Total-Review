# Higher Order Component

## Ôn lại Higher Order Function

Higher Order Function (HOF) là function mà nhận vào đối số là
function hoặc return về function. Ta có các ví dụ phổ biến như

- Nhận vào đối số là function (callback): `.map()`, `.forEach()`, `.filter()`
- Return về một function: Kỹ thuật currying mà chúng ta hay dùng
với react khi tạo function cho các sự kiện onChange

Ví dụ về currying: Tìm những số từ 0 đến n (không tính n) thỏa
mãn điều kiện nhất định

```js
 const findNumber = (number) => (func) => {
  const result = []
  for(let i=0;i<n;i++){
  if(func(i)){
    result.push(i)
  }
  }
 }

findNumber(10)((number)=> number % 2 == 1)
```

## Higher Order Component Nâng cao

```jsx
const CommentList = () => {
  return <div>CommentList</div>
}

const BlogList = () => {
  return <div>BlogList</div>
}

const withSubscription = (WrapperComponent) => {
  const newComment = (props) => {
    useEffect(()=>{
      subcribe('Đăng Ký')
      return () => {
        unsubcribe('Hủy Đăng Ký')
      }
    },[])
    return <WrapperComponent {...props}>
  }
  return newCommnet
}
const NewCommentList = withSubscription(CommentList)
const NewCommentBLog = withSubscription(BlogList)
```


```jsx
const hightodercomponent = (WrapperComponent) => {
  return function (props : any){
    return <WrapperComponent {...props} extraData ="Hello Du Thanh Duoc"></WrapperComponent>
  }
}
```
