import { useState } from 'react';
import { Flex, Modal } from '../../components';
import { StyledHome, Title } from './StyledHome';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHome>
      <Flex direction='column'>
        <h1>Home</h1>
        <Title onClick={() => setIsOpen(true)}>This is Modal</Title>
        <Modal isOpen={isOpen} close={() => setIsOpen(false)} />
      </Flex>
    </StyledHome>
  );
}
