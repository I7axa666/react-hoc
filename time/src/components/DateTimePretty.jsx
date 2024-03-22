import moment from 'moment';

export default function DateTimePretty(props) {
  const {Component, date} = props;
  console.log(date)

  const dateDifference = moment() - moment(date)
  console.log(dateDifference/1000/60/60)
 
  let newFormatDate = `${Math.floor(dateDifference / (1000 * 60 *60 * 24))} дней назад`
        
  if (dateDifference < 1000 * 60 * 60) {
    newFormatDate = "12 минут назад";
  } else if (dateDifference < 1000 * 60 * 60 * 24 ) {
    newFormatDate = "5 часов назад";
  } 
        
  return <Component date={newFormatDate} />
    
}
