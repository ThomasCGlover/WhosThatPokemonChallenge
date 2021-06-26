import React, { Component } from 'react'
import './PokeFetch.css';


class PokeFetch extends Component {
  constructor() {
    super()
    this.state = {
      pokemonId: '',
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      pokeShadow: ''
    }
  }

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          pokemonId: res.id,
          pokeInfo: res,
          pokeSprite: '',
          pokeName: "Who's that Pokemon?!",
          pokeShadow: res.sprites.front_default,
        })
      })
      .catch((err) => console.log(err))
  
    }
  componentDidMount() {
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonId}`, {
        method: 'GET'
      }).then(res => res.json())
        .then(res => {
          this.setState({
            pokeSprite: res.sprites.front_default,
            pokeName: res.species.name,
            pokeShadow: '',})
        })
        .catch((err) => console.log(err))
    }, 5000)
  }

  componentWillUnmount(){
    this.setState({
      pokemonId: '',
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      pokeShadow: ''
    })}
  
  // updatePokemon(req,res){
  //   this.setState({
  //     pokeSprite: res.sprites.front_default,
  //     pokeName: res.species.name,
  //     pokeShadow: '',
  //   })
  // }

  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
        <button onClick={this.updatePokemon}>Update</button>
        <h1 className={'timer'} >Timer Display</h1>
        <div className={'pokeWrap'}>
          <img className={'pokeShadow'} src={this.state.pokeShadow} />
          <img className={'pokeImg'} src ={this.state.pokeSprite} />
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
        </div>
      </div>
    )
  }
}


export default PokeFetch;







































// import React, { Component } from 'react'
// import './PokeFetch.css';


// class PokeFetch extends Component {
//   constructor() {
//     super()
//     this.state = {
//       pokeInfo: '',
//       pokeSprite: '',
//       pokeName: '',
//       visible: false,
//     }
//   }


// }

// fetchPokemon = () => {
//   let min = Math.ceil(1);
//   let max = Math.floor(152);
//   let pokeNum = Math.floor(Math.random() * (max - min) + min);
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
//     method: 'GET'
//   }).then(res => res.json())
//     .then(res => {
//       this.setState({
//         pokeInfo: res,
//         pokeSprite: res.sprites.front_default,
//         pokeName: res.species.name,
//       })
//     })
//     .catch((err) => console.log(err))
//   }


// componentDidUpdate(){
//   setInterval(() => {
//     this.setState({
//       visible: true,
//     })
//   }, 5000);
  
// }


// componentWillUnmount(){
//   this.setState({
//     visible: false,
//   })
// }
  // fetchPokemon = () => {
  //   let min = Math.ceil(1);
  //   let max = Math.floor(152);
  //   let pokeNum = Math.floor(Math.random() * (max - min) + min);
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
  //     method: 'GET'
  //   }).then(res => res.json())
  //     .then(res => {
  //       setTimeout(() => {
  //       this.setState({
  //         pokeInfo: res,
  //         pokeSprite: res.sprites.front_default,
  //         pokeName: res.species.name,
  //       })}, 10000)
  //     })
  //     .catch((err) => console.log(err))
  // }
//   render() {
    
//     return this.state.visible ?  (

//       <div className={'wrapper'}>
//         <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
//         <h1 className={'timer'} >Timer Display</h1>
//         <div className={'pokeWrap'}>
//           <img className={'pokeImg'} src={this.state.pokeSprite} />
//           <h1 className={'pokeName'}>{this.state.pokeName}</h1>
//         </div>
//       </div>
//     )
//     :
//     (
//       <div className={'wrapper'}>
//         <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
//         <h1 className={'timer'} >Timer Display</h1>
//         <div className={'pokeWrap'}>
//           <img className={'pokeShadow'} src={this.state.pokeSprite} />
//           <h1 className={'pokeName'}>{"Who's that Pokemon?!"}</h1>
//         </div>
//       </div>
//     )
//   }
// }

// export default PokeFetch;