import React, {Component} from 'react';
import Render from './render';
import moment from 'moment';
import Search from './search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Page extends Component {
    constructor() {
        super();
        this.state = {
            product:"",
            productList: [
                {name: "CyberTruck", 
                cost:40500,
                img:'https://cdn.motor1.com/images/mgl/OkA6L/s3/tesla-cybertruck.jpg',
                 id:0},
                
                {name: "Tesla Shirt", 
                cost:45,
                img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBASDxAQDw8PDw8QDw8PDw8PDw8PFRUWFhURFhUYHSggGBolGxUWITEhJikrMS4uFx8zODMtNygtLisBCgoKDg0OGhAQGC0lICUtLy0tKy0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIFBgcDBAj/xABNEAACAQMABgUGBg0LBQAAAAAAAQIDBBEFBhITITEHQVFhcSJzgZGhsRQjMjWywSVCRFJTVGJykpOz0fAVFiRDVWOClKLS4TR0g6PC/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/EADYRAAIBAgIHBgUDBAMAAAAAAAABAgMRBCESMTJBUXGRBWGBsdHwEzNyocEiUrJCouHxQ3OS/9oADAMBAAIRAxEAPwDsQAAAAAAAAAAAAAAAIbI20AWBCZIAAIcgCQV20SmASAAAAAAAAAAAAAAAAAAAAAAAACGz49I6To28HOtUhTguubSy+xdr7kCUm3ZH2ZIc0c0010lvLjaUk49VWspYb7oLDx4teBqmkNa7+tlSuKkIv7WnikvDMccPFmCWIgtWZ0aXZWImru0eevp62Z2m+0vQorNWtTpr+8nGOfDPM1nSHSNZ08qnva7/ACYuMP0p49mTkfFttuTk+cnxk/Fk7JglinuX5OlT7FpLbk3yyX5f3N00h0l3E+FGlCjx+VLNWeO7kk/QzX7/AFmvqkXtXNVp9UZbvm/yUjF4S5EyRhlVnLWzoQwVCmv0wXS76u7N40F0iVKMVC6i60YrCqxklVx+VnhJ9+V6TaLbpCsZLjUlB9k6c+Hpjle047LwKRksGSOInHLXzNWt2XhpyvZx5PLo0zsN70i2UE9jeVpdkIbK9c8I1LTnSHXrxlChFW6ecyjPbqtdinhJejj3mm7S7TzkhKvOW8mn2ZhqTvbS55/ayXVMzGj9Zr+gsQuauzz2ZtVV/rTa9BsOi+ku5hwuKdOss/Kg3Rnjw4pv1GjyZDiUjVmtTMtTBUJ64LyfVWZ16x6SbKbSqKtQz1zipR9cG8elG02GlqFeO1Rq06se2E4y93I/O+z3iMWntZxJcpLhJekzRxL3o0KnY9N7EmuefofpVTROThGitb7+2xs1pVIL7SvmrH1vivQzddDdJtCWI3VOVBv+sjmpSz3pLaj6n4meFeEu451bszEU80tJd3pr6JnQwfPa3cKkYzpyjOE0pRlFqUZJ8mmuZ7pmY55IAAAAAAAAAB4XFzCnFynKMIxWZSk1GKXa2+QB7NnxaR0pRt4bdapClHtnJLL7Eut9yNR1h6RLemnG2+PqcUpYe5i+3a6/R60cxvr6rXqOpXqSnN/bSfJdkVyiu5GCpiFHKObOphey6lX9VT9K+78N3N+FzftPdI/ONnDK/C1Vw8Yx+uXqNCv76rXk51qk6knw2pvOF2Jcku5HgkDRnUlPaZ6HD4SlQVqcfHf19LItFFE/+CZciUihsEIkAEjIAAIKtL+EXIBDR5tekKJdkElbEIMSXEkAoUPXBVxJuQ0UyQnxx3Ettc+K9pSq8OL7Hh+DJKNn26M01dW0l8Hr1acU87EZZpt98HmPsOgaE6TcYjd08dW9o+9wf1N+BzRx4li8aso6ma1XBUa19OOfHU+vrc/QuitN291HaoVYVF1qL8qPdKPOL8TIqR+bqNWUJKcJSjKPGM4ScZLwa4o3TQfSNcUsRuo/CIffxxGql7pezxNmGJi9rI5FfsipHOk9JcNT9H4dDrwNa0NrpZXTjGNXdzlyp1koTb7E+Un4Nmxxlk2E01dHKnCUHozVn3lgASVPj0veOhQq1VB1HSpynu4vDlsrOEziOsOsdxeyTqyUKcXmNKGd3HvfbLvfowd2rQymn1nCNadF/BburSSxDO3S83LjHHhxXoNXFaVlwOz2N8N1JJr9WtPzt36u+1zEokgk0j0ZJCBJBZES5MnJVstIEAFgCwKlgAVAAIIYZLAIKMEkEkAAgEHnURSqspnrIoyyKSQi+Cz2FkQiyQCLoiSKZwWlL2kWLXDin1c+p8juOoNGpCwt97Oc5TjtreScpRhLjGGXxwk0ca0VYO5rUqEf66ooy7o85y9EU/YfoK2pKMUksJJJLsSNvCrXI4fbVVfop+P4XU9iSAbZwSGaL0n6E3tBV4L4ygnt99LrX+Hn4bRvZ5XFJSi01lNNNPk0+orKKkmmZaFaVGoqkda9teOo/OWSyMnrLov4Jc1aT+Sm5wb66cuK/jtTMWmcppp2Z7WEozipReTzRIZIwQZCmfqPT9x5T5vwXvPTrJIQRts9VrOnTt53OklQlc29O4jD4LOezGazjajLjh5XVyNSOk6C0zVjb0IvStlQ2acIRpTtt5OnCKxGMpcMyxjPeXpxTbv7+6NbFTqQUXB787a/4T8vE0vTVja0dj4NeK7k29tK3nSUI9Ty3xbfUj5NG0aVSrCNeqrek87dXdymo8G15K4vLSXpNz160tTrWdvD4XQu68biUpTo092lTcWl5PpSNX1Xrund0pqtC3cXP46rDbhDMZLjHrznHi0JJadvfn+SaVWUqLk73V9evLfsr+HW5k/5D0Z/bC/yVx+816/pU4VJxo1VXpReIVVTcFNYXHZfFccr0HUf5dn/AG1Y/wCTX7zm+sNZzuq8nUhcOU097CG7hPyV5UY9S6vQTOKSy9/3Mx4arKcmnfVv5/8AXDzfLefRq9oRXqqU4V4wulHaoUKkcRuMLMoqecRfc19ePottVZq3rXF5N2dKm5Qgp03KrXuFlbqMMp808vufUm1TVWhbKcri7r7uFu4zhRpyxc15rjGMOtLKWZZXiuazemNM0NL0ZSrTjZ3dvtzoqpOSt69FvO7y+VTglnrx2cIoxjo3evd3+89+ZFWpUVSy2cru2z3LjfK7s9G+/doxnbfVx17R3FrU39Wk38KtdjZq0o9U1xe3Hh1d/Y0YIzepV8re/t5yqbqmptVJuWzHYcXtKT7M49SKwtezNivpKDlHWs7cbbvHuGl9XPglvSlcVdi7rYnGzUM1IUvvqss+Q+xY7up4wR9+sFzvbq4qbbntV6rhNva2obTUcPsxjHdgx5ErXyIpaWinN5vPh4W4Lq9fI0eTLspOIRZoJEbWODKwqNPylw7Ue62ZLhxJKrPURBkxR4ThKPFcV2dZ9VpS3rhClmU5yjCEU38uXBJ93b3ZItwJUrbWVjoHRRonanVuZLgviafpw5y9eyvQzqCMZq5ouNrbUqMeVOCTfXKXOUn3ttv0mUOnCGjFI8dia3xqsqnHVy3fb7gAFzACGSADTtfNVJXypzo7Cr08r4xyUZ03zi2k3wfFcOt9pz2jqVpBzqR3Gzu5OO26kVCrjrj1tdeWl9R3LBGDFOjCTuzeodo16MNCLVt11qOIw1F0i3jdbPHnOrBLxzHL9h8t/qzeUPl29Rr7+C3kfHyc4Xikd4wVnBGN4WFsrmxHtiunmotcLP1PzhJ/K7VLDXLDxyPSD4G19KMUrxJddGn68zNTguBp1I6LaPQYar8WnGpa10SD0o0ZVJRhTjKUpPEYQTlKT7ElzPvhoiX26uFLrjTtpVEu5tyis9pVJszSnGOt+/C7MYDI1dEVEm4QrSUU3PaoTjKKScnJrj5KUXl54Hz0LKUouo4zVGOVKooOUFLyfJT4Jvyo8M9eeQsxpxe/35+8j5iGfbubfHy7jPmKePVvCJ21SlsVYqew2t3VcGoOeM7OeK2lxysvGCBpe2mvwRDRdeSUo0K0oT+TJUpuMl2ppYZFHR9efGFGrNZccxpzktpcHHgua7DO0dUdIV6casKKr72KmpxrUcbDSxmTkm31d2z6vtv9VNK15J1bNR4ybdOtRxHbnOpKWHUaeJTfoSXeZPhvg+n+DWeKgn8yPVZf3Z58jTatOUJOM4yjOPyozi4yj4p8UeefWbBHR1WNZ21ztTdBNxtqU41Kk6sktmjFpNx5pyxyUZPngtOajGdGrRrODUXGnRgoQpVMJqUXLLcllxbeW8tNvgyLcS/xuCvy4cVfP8d5roZsae92adG3qzhGEdi3nH5WMbbjJJONR5lNyXPDXFJRMLpW2jCrKMHJw4OMZ43lPPOE0uU4vMWu1ENExqXdmrP374cG87fIv47yJMsN2ufPx5C5ez3Gw6N1Fubm3hXozotVIKUYSnOL70/Jayj5LjUvSMOds2/vqcoSX0s+w67qPSUbC1x10acuHbJbT9rM9sI3lh4tI8y+060ZtZNXdrr0aOCR1X0i/uWo137Ka9cjaejvVWvC6lXuaLpKnBxip7O1KbxiSw3wUcrP5R1LYRKiTHDxi7la3alWrBwaST4X9d+oRRIBnOaAAAAAAAAACsixWfIA4v0jVtrSM4/g404/6VL/AOjWUZ3X1/ZK68aP7GmYI5dXbfNntMGksPTt+1fdIymrCi722U4xnF1qXkzaUJPPBNvks4Ov0taLWEdipdyjUi5Ke1Ws5zg02nFtcHy7Os4YwmTTquCyMeKwUcRJOT1d3e2dm07pq3ube4jSqKvGFrcSqQdW2cE1B7NRxWZSltYxjHFI1fo0nRpwuatWoqO6qUZOpv8AcvZamth9U4tvk+GcPng0F+IZLrNyUmikMBGFGVKMsnbdw8d/tM7p/PWz/Dejf2H+80PpQ3UvgtSjU3yq/CZ7zf75zj8VsrsjFeViK4c31s0cL38xOs5xs0MP2fChUVSL1XytrytxO2aPvrW1oUnNUac69KnP4i4o28p01GOzObqVIeV1PDZ7UtP2L8iU3s1Hsve6Qta0fKf3vwiTxx6kcMWOpsZLrEPgYn2VF65v7+puesVvCGmLensUYRU7SM4UuNHZdRYXFfeuOfSdEo6ZtLd1Kc7yFOW3OcqdW4hU3MpeU6cXjKis8nyzw4YOD8MYxw7OoLh1lY1tFtpGStgFVjGMp6lbVr78374nd56UtLudOMLmnXccz3Kr0lTmmtlupHHlqKbeOXDtSODLkS+PN5KlalTT1mTC4RYdNRd07eFr+d/9lkRPkQi38Ixm2jumo/8A0Fr5mHqwZ81/UV/0C18zD3GwHVjso8RW+ZLm/MAAsYwAAAAAAAAAAAAVnyLFZ8gDhmv3zldeNL9jAwRm9fHnSV1+dS9lKBgzl1Nt8z2eE+RT+mP8UWBAKGySSVyACQQACSAACSoYBAZUAkgIsQismBc7f0eSzo+3/NkvVOSNnNV6Nn9jrfwqL07yRtR1IbKPFV/my5vzYABYxAAAAAAAAAAAAArPkWKz5AHBtd/nG685H6KMKZvXb5xu/Ox+hEwhzJ7T5ntML8iH0ryLIkhEmMzgAkAEEkAAEkAEAkAFCSSrJIBOCCQQdn6MX9j6PjV/aTNtNS6Mn9jqHjV/aTNtOpT2FyPGYn59T6pebAALGEAAAAAAAAAAAAFZ8ixWfIA4Lro86Ru/Or2JIw6MvrpHGkbtf3ufWk/rMOcue0+Z7PC/Jh9MfIsSQSihsEkYJIBIAAAJIAABJAIIKtFiCURchAIrEA7Z0axxo+h3uo//AGTNrNW6OPm+h/5f2kzaTqQ2VyPF4j50/qfmAAWMIAAAAAAAAAAAAKz5Fis+QBwbXn5yuvz4fQiYZGX12edI3fnF7omHRzKm0+Z7LDfIh9MfJFkSQSjGbIAJBJAJAAIBIBBJAyAQypbJVkorcFYEorFgg7j0dxxo+374yfrnJ/WbOa30f/N9t+Z9bNkOpDZR4qtnUlzfmAAWMYAAAAAAAAAAAAKz5Fis+QBwTXVfZG784vcjEGY11+cbvzi+ijCZOZPafM9lhvk0/pXkiyZdIrFdpVzzyKGxex6ZLFESQWRYggZAJBBIBDIZJDAKkMllGSUuMiJVBElUd31BX2PtfMxfr4mxmu6hfN9n5iHuNiOnHUjxdTblzYABYoAAAAAAAAAAAACs+RYrMA4Lrzw0jd+cj9GJhOXM2/W3V28nfXFSFvOUJVFKEopvKwu8xH81738UqfoHOnGWk8nr4HrcPXpKjC9SOyv6lw5mFy5dyPRJJfWZd6tXq+5a36GR/N296rSs/wDA17ymhP8Aa+hnWIoa/iR/9L1MVkRMm9BXq52lz+qb9xSWh7tfcdz+okw4S4MlYii/+SPVHwA+t6PuV9yXX6if7g7C5/FrheNKaXuK2fAv8an+9dT48kpn2R0bcvlQqvwp1X7ok/yXdfi9XPmq3+waMuBPxaf7l1PibIZ9crOvH5VCpH86E4/SSPBU6r+TRqy8I5FmtaJc4Wvc8WUPpp2tfL/o9dJ9tORZWtTjijWb7qbb/wCCc1uManB/1I+NorB+8+52df8AAV+X4KT4+g+i11bvZpNWtbD4+VSnD2SwyUpPcUlVpxavNLm0jseoHzbZf9vT9xsRg9S7WdKwtadSLhOFCEZRfOLS5Mzh01qPHS2mAASVAAAAAAAAAAAAAAAKuKGyiwAK7KI2EXABTdobtFwAee6XYN0uxHoALHnul2Ibpdh6ACx5OiuxDcLsR6gEWR5bldiG5XYj1AFkee5XYiVTRcAkhIkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=',
                 id:1},
                
                {name:'Model 3',
                cost:34000,
                 img:'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg',
                  id:2},
                 {name:'Model S',
                 cost:69000,
                  img:'data:image/jpeg;base64,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',
                  id:3 },
                  {name:'Semi',
                  cost:340000,
                   img:'https://electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-Guide-Semi-Hero.jpg?quality=82&strip=all',
                   id:4 },
                   {name:'Mach E',
                     cost:43000,
                     img:'data:image/jpeg;base64,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',
                     id:6
                   },
                   {name:'Rivian Truck',
                   cost:60000,
                   id:5,
                   img:'https://www.cnet.com/a/img/8DTd-oyBzdydLA5YU5U8sV4B-zg=/1200x675/2020/11/16/de892df3-f50e-45af-8b07-781b37b113a3/ogi-r1t-rivian-blue.jpg'
                   },
                   {name:'Model 2',
                   cost:25000,
                   id:7,
                   img:'https://cdn.carbuzz.com/gallery-images/840x560/826000/0/826065.jpg'

                   },
                   {name:'Model Y',
                    cost:56000,
                    id:9,
                    img:'https://upload.wikimedia.org/wikipedia/commons/b/b0/2020_Tesla_Model_Y%2C_front_8.1.20.jpg'

                   },
                   {name:'Tesla Roadster',
                   cost:160000,
                   id:10,
                   img: 'https://s.yimg.com/os/creatr-uploaded-images/2021-01/72ea0b90-620d-11eb-bbdd-16dc77c2eb4a'

                   }
            ],
            expense:0,
            transactionHistory:[],
            transactionTotal:0,
            id:0,
            isData:false,
            image: "",
            itemFound:false

        }
        this.id = 0;
        this.handeSubmit     = this.handleSubmit.bind(this);
        this.handleChange    = this.handleChange.bind(this);
        this.handleDelete    = this.handleDelete.bind(this);
        this.arrRemove       = this.arrRemove.bind(this);
        this.itemInDataBase  = this.itemInDataBase.bind(this);
        this.invalidData     = this.invalidData.bind(this);
        
        this.itemFoundSubmit = this.itemFoundSubmit.bind(this);
        this.costFinder      = this.costFinder.bind(this);

        


    }
itemInDataBase() {
   const isItem = this.state.productList.filter(
        item => {return item.name === this.state.product.trim()}
    )

    return isItem.length ;
}


costFinder() {
    const theCost = this.state.productList.filter(item => {
                  return item.name === this.state.product.trim();
    })
    return theCost[0]
}
    
handleSubmit(event) {
    event.preventDefault();
    const productName = this.state.product.trim()
    if (this.itemInDataBase() > 0) {
       console.log('bad dabs')
    var tHistory = {
         product: productName,
         expense: this.costFinder().cost, 
         id: this.state.id,
         image : this.state.productList.filter(block =>  {
             return block.name === productName;
         })[0].img,
         time: moment().format('MMMM Do YYYY, h:mm:ss a')};
         console.log(tHistory.image, 'jj')
        
         const addExpense = isNaN(parseInt(this.state.expense)) ? 0 :  this.state.expense ;
         this.setState({
             transactionHistory:[tHistory].concat(this.state.transactionHistory)  ,
             product:"",
             expense:"",
             id:this.state.id + 1,
             transactionTotal:this.state.transactionTotal + this.costFinder().cost,
             time:moment().calendar(),
             isData:true,
              })
         
    }  else {
        this.setState({
            isData:false,
            product:"",
            expense:"",
            id: this.state.id + 1,
        
        })

    }

    
    
    
}

itemFoundSubmit(cost, name, img) {
    var tHistory = {
        product:name,
        expense: cost, 
        id: this.state.id,
        image : img ,
        time: moment().format('MMMM Do YYYY, h:mm:ss a')};
        
       
        
        this.setState({
            transactionHistory:[tHistory].concat(this.state.transactionHistory)  ,
            product:"",
            expense:"",
            id:this.state.id + 1,
            transactionTotal:this.state.transactionTotal + cost ,
        
            isData:true,
             })

}


handleChange(event) {
    
    this.setState({
       [event.target.name]:event.target.value.charAt(0).toUpperCase() + event.target.value.substring(1,event.target.value.length)
    })

    
   
  
    

    
}
arrRemove(arr, remove) {
 const result = arr.filter(item => {
        return item.id != remove.id;     
    });
    return result;
}
handleDelete(obj) {
    const tempExpense = isNaN(parseInt(obj.expense)) ? 0 : obj.expense;  
    this.setState({
      transactionHistory:this.arrRemove(this.state.transactionHistory, obj),
      transactionTotal: this.state.transactionTotal - tempExpense
        
    })
}    

invalidData() {
    return (<div className='invalid-data'>
        <h2>Sorry product was not found   <FontAwesomeIcon icon='sad-tear' /> </h2>
          <img src='https://i1.sndcdn.com/avatars-000447607161-68isu6-t240x240.jpg'/>
        </div>)
}

     
    render() {
        
         if (this.state.isData || this.state.transactionHistory.length === 0) {
         
        var itemsToRender = this.state.transactionHistory.map(item => {
           
            return <Render
             handleDelete={this.handleDelete} key={item.id} data={item}/>
        }) 
               } else {
                   var itemsToRender = this.invalidData()
               }
       const searching = this.state.productList.filter(item => { 
                   
                 return item.name.substring(0, this.state.product.length ) === this.state.product.substring(0, this.state.product.length).trim()
       }).map(item => {
           return <Search key={item.id} itemFoundSubmit={this.itemFoundSubmit} data={item} />
       })
       
        return (
            <div className="page-container">
                 <form onSubmit={this.handeSubmit}> 
                   <h1>Purchase everything electric here!!!</h1>
                   <div className="page-wrapper">
                      <div className="input-wrapper">
                       <input 
                       type="text"
                       name="product"
                       placeholder="Product or Service"
                       value={this.state.product}
                       onChange={this.handleChange}
                      
                       />

                       </div>
                     
                    </div>
                   <div className="main-btn"> <button>Purchase </button>  </div>
                  </form>
           <div className="page-wrapper">
          
           <h3>Your total expenses so far: {this.state.transactionTotal}$</h3>
            
              {this.state.itemFound ? <h1>hi there</h1> : null}
              

                {this.state.product.length >= 1 ?
                  <div>{searching} </div>
                   :
                   null
                }
              {itemsToRender}
         
            </div>
           
         </div> 

      
        )
    }
}