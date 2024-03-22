import Popular from './Popular';
import New from './New';

export default function Wrapper(props) {
  const {Component, item} = props;
  // console.log(item)

  if (item.views < 100) {
    return <New><Component {...item} /></New> 
  } else if (item.views > 1000) {
    return <Popular><Component {...item} /></Popular>
  } else {
    return <Component {...item} />
  }  
}
