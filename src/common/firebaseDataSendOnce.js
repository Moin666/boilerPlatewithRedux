const [cardData, setCardData] = useState([{
  imgUrl:"https://preview.colorlib.com/theme/unwind/images/xroom-1.jpg.pagespeed.ic.2dbJCSi6kW.webp",
  title:"Luxury Room",
  caption:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  location:"karachi",
  price:"15,999"
},{
  imgUrl:"https://preview.colorlib.com/theme/unwind/images/xroom-1.jpg.pagespeed.ic.2dbJCSi6kW.webp",
  title:"Luxury Room",
  caption:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  location:"karachi",
  price:"15,999"
}
])

React.useEffect(()=>{
  cardData.map(item => firebaseMethods.writeOperation("cards",item))
},[])
