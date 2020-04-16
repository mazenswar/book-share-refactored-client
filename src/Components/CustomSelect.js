import React, { useState, useRef } from 'react';

const choices = ['Poor', 'Fair', 'Good', 'Very Good', 'As New'];
const CustomSelect = ({ callback }) => {
  // Emulating Props
  // const data = useSelector(state => state.data.emotions);
  // const initialValue = 'Select something';
  // const valueToShow = 'name';
  // const valueToExtract = 'id';
  // const callback = value => {
  //   console.log('VALUEEEEEE ~~~~~~~~~> ', value);
  // };
  // Internal State
  const [value, setValue] = useState('How has it faired in life?');
  const dropDownRef = useRef();
  const containerRef = useRef();
  // Event Handlers
  function handleHover(bool) {
    if (bool) {
      dropDownRef.current.style.transform = 'scaleY(1)';
      containerRef.current.style.zIndex = '100';
    } else {
      dropDownRef.current.style.transform = 'scaleY(0)';
      containerRef.current.style.zIndex = '1';
    }
  }

  function highlight(e, bool) {
    bool
      ? (e.target.style.backgroundColor = '#808080')
      : (e.target.style.backgroundColor = '#262626');
  }
  function handleClick(e) {
    const choiceId = e.target.dataset.id;
    const newOption = e.target.dataset.name;
    callback(choiceId);
    setValue(newOption);
    dropDownRef.current.style.transform = 'scaleY(0)';
  }
  // DOM rendering
  function renderOptions() {
    return choices.map((element, i) => (
      <span
        key={'select-' + (i + 1)}
        onClick={handleClick}
        data-id={i + 1}
        data-name={element}
        onMouseOver={(e) => highlight(e, true)}
        onMouseLeave={(e) => highlight(e, false)}
        style={choiceSpan}
      >
        {element}
      </span>
    ));
  }
  // Component Return Value
  return (
    <div
      ref={containerRef}
      style={selectContainer}
      className="select-container"
      onMouseOver={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <p style={originalSpan}>
        <span>{value}</span>{' '}
        <span role="img" aria-label="arrow" style={arrowStyle}>
          🔽
        </span>
      </p>
      <div ref={dropDownRef} style={dropDownStyle}>
        {renderOptions()}
      </div>
    </div>
  );
};

const dropDownStyle = {
  width: '100%',
  transform: 'scaleY(0)',
  transformOrigin: 'top',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: '0.5s',
};

const selectContainer = {
  // width: 'fit-content',
  width: '30vw',
  height: '5vh',
};

const originalSpan = {
  cursor: 'pointer',
  position: 'relative',
  width: '100%',
  backgroundColor: '#eee',
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3% 0',
  color: '#262626',
};

const arrowStyle = {
  position: 'absolute',
  right: '5%',
};

const choiceSpan = {
  cursor: 'pointer',
  padding: '4% 10%',
  width: '100%',
  backgroundColor: '#262626',
  color: '#eee',
  transition: '0.5s',
  // textAlign: 'center'
};

export default CustomSelect;

// <CustomSelect
//    data = { arrOfObjs }
//    initialValue = { value }
//    valueToShow = {: name }
//    valueToExtract = {: id }
//    callback = { handleChange }
// />
