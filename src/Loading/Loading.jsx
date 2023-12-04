import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Loader>
      <ThreeCircles
        height="150"
        width="150"
        color="#FFC812"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor="#bebebe"
        middleCircleColor=""
      />
      please wait....
    </Loader>
  )
}

export default Loading

const Loader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.75rem;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #262626c9;
`