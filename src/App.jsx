import React from 'react';
import Jumbotron from './components/Jumbotron';
import TitleHeader from './components/TitleHeader';
import Container from './components/Container';
import Row from './components/Row';
import Column from './components/Column';
import Form from './components/Form';


export default class App extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <TitleHeader className="text-center" title="React" />
                    <br></br>
                    <h1 className="text-center">V1.9</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Column className="col-md-6 offset-md-3">
                            <Form />
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}
