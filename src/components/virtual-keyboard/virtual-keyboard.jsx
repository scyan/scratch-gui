import React from 'react';
import styles from './virtual-keyboard.css';
export default class Index extends React.Component{
  componentDidMount(){
    // const keyEl = document.createElement('div')
// keyEl.innerHTML='abc'
// document.body.appendChild(keyEl);
// keyEl.addEventListener('click',(ev){
//   this.props.vm.runtime.emit('KEY_PRESSED', 'space');
// })
  }
  onClick(keyValue){
    this.props.vm.runtime.emit('KEY_PRESSED', keyValue);
  }
  render(){
    return(
      <div className={styles.virtualKeyboard}>
        <span onClick={this.onClick.bind(this,'up arrow')}>↑</span>
        <span onClick={this.onClick.bind(this,'down arrow')}>↓</span>
        <span onClick={this.onClick.bind(this,'left arrow')}>←</span>
        <span onClick={this.onClick.bind(this,'right arrow')}>→</span>
        <span onClick={this.onClick.bind(this,'space')}>space</span>
      </div>
    )
  }
}