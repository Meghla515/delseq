import './App.css';
import { ChakraProvider, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <h4> Ressurser </h4>
      <Accordion allowMultiple>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: '#D6E4EE', color: 'white'}}>
              <Box flex="1" textlign="left"> Politiet</Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            High speed chase with bernie driving
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: '#D7E9D8', color: 'white'}} >
              <Box flex="1" textlign="left"> Helse</Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            High speed chase with bernie driving
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: '#FAE3DE', color: 'white'}}>
              <Box flex="1" textlign="left"> Brann</Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            High speed chase with bernie driving
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: '#E6DEED', color: 'white'}}>
              <Box flex="1" textlign="left"> OPS</Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            High speed chase with bernie driving
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: '#EDDBD5', color: 'white'}}>
              <Box flex="1" textlign="left"> Heimvernet</Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Heimvernet 1
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: '#DFDEDC', color: 'white'}}>
              <Box flex="1" textlign="left"> Forsvaret</Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            High speed chase with bernie driving
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: '#FEE9C4', color: 'white'}}>
              <Box flex="1" textlign="left"> Sivilforsvaret</Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            High speed chase with bernie driving
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
      </Box>
    </ChakraProvider>

  );
}

export default App;