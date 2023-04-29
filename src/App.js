import React, {Component, useState} from 'react';

import Film from './film'

class App extends Component {
    state = {
        films:[
            {genre: "horror",title:"blade"},
            {genre: "comedy",title:"taxi"},
            {genre: "drama", title:"prestige"},
            {genre: "sci-fi", title:"avengers"},
            {genre: "sci-fi", title:"inter"},
            {genre: "horror", title:"evildead"},
        ],
        genre: "mix",
        display: 'flex'
}

regenre (event){
   let item =  this.state.films.find((item) =>{
if(event.target.value.toLowerCase() == item.genre.toLowerCase()){
    return true
}else {
    this.setState({genre:'mix'})
}
    })
    if(item instanceof Object){
        console.log(item)
        this.setState({genre:item.genre})
    }
}
filter(event) {
    if(event.target.textContent == 'Лист'){
        this.setState({display:'block'})
    }else if (event.target.textContent == 'Сетка'){
        this.setState({display:'flex'})
    }
}


    render (){
        return(
            <div>
                <span>DADDARIO</span>
               <div className='wrapper' style={{display:this.state.display}}>
               <input type="text" onChange={(event)=>{this.regenre(event)}} /> 
                {
                    this.state.films.map((item , index)=>{
                        if(this.state.genre == 'mix'){
                            return <Film key={index} title={item.title} />
                        }else{
                            if (item.genre == this.state.genre){
                                return <Film key={index} title={item.title} />
                            }
                        }
                    })
                }
                </div>
            <button class="cond cond_1 " onClick={(event) =>{this.filter(event)}}>{(this.state.display == 'flex') ? 'Лист':'Сетка'}</button>
            </div>
            

        )
        
    }

}

export default App;