import { BrowserRouter, Route } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import Projects from './components/Projects'


import './App.css';


const projectsList = [

  {
    name: 'Ping Pong',
    id: 1,
    description: 'A simple Ping Pong game built with HTML, CSS, and Javascript using Canvas',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAC4CAMAAAD9ogFoAAAAclBMVEUAAAD///8vLy9QUFATExPx8fG4uLiHh4fg4OBBQUHJyclfX18ICAgEBAT4+Pienp6QkJA0NDQbGxvR0dFwcHBoaGggICA6OjpJSUmsrKympqYXFxeBgYFOTk5ZWVnZ2dmOjo6/v79kZGR5eXkmJibn5+eJjuMZAAADxElEQVR4nO3d4XaiOhQFYCAR0AAKEkJFqQp9/1ec0Kkt93acrrsWJLk5+/vTLrGSXfEEIpAgAAAgImfea59E56H3UkRH9K/oG7MK3ZbC7CqP/636rSbW0RPbjbCDcPSMc57ZbgSsK9nNqNkCHs8WnKy1b0WneS8z362qNrMFrtTgRX2LPpxOpz6gEH0fhpv95EUn3AZfFZ4f9h/SMNzZbuYaDvotzadfSh25DP7Uuel/SmyjaWtD9K/otd7E2fRA9kAm+kOVzvbqvSxzz6N7X+ER/St61zQN1z8zWX84onPzDe3or9Gk/1f0fIw+6Edutpu5hmkfvnj3sQ//iF69FcXnAi/L3LfDl0eZ87/CEz5ojbYzfLYgU7MF5dO/By98Hr7QQ3gwGtEpegxLAoDfON2vGwlXeESniHD0JoqiznYjAGB18nq9Pjtf13OEKzyiU3SO41jYbgTQlekNMG5st8KK96sgInPrm86Zys2t7m9MR3eowiO6MYjuAtPRR6WUIx2K6egOQXSKTEcX5/PZkaEKVHhjEP0HuYkdfdPRk9vtJn96UrYripfVm+Jkhc+OYYjoK3Iyej4cDvfV1+JkdDOMV/iiKNC52ZYdtMrc+hyKbhrh6GXbtqPtRgDA6tgwDFvbjbCDcIVHdIoOu92utt0IAID1vGw2m7PtRthBuHNDdIoUY4zmADAALa2UUv38NB8RrvCITtH+9fUVQxUA4LFTmqaD7UbYQbhzQ3SKWiEE7qcI4L9t3/dEhyUJV3hEp+j09vZGdB8eAGjYH49HoiOyhju3fLojirnV/ZXh6CxNU1cm1DEcXYTPZ+c1jdV1bfCbVpeiG4boFLkUXV0uF4MXe7kUnXCFR3RTXIpu+Mxol6IbhugUIboTpuvcfrwlz3Jcik64c0N0U1yK3pu9ft2l6IYRjj5KKTFznnXTnLVLDlVUs9Ox1GXBF17e0hW+HS7Xtq7FWXYBl6582/BHS0ePWJmwSLH63gVKkIoe/E6bZ7nTsSeLb/DyUrVdIPZ97Xz2hZWsFDIP+lH+Y6JvCrgSY1sFTVs5cjtmg/LpXrtNELzPj5dROvN4bLZye+/vfS1EFfC+lJI5OptQEsfxkvdJjWpWMymugzgn+r3fllEpDgu+/oKWP2jl/5epIJeOnrVqVBXnemOvszLiDn/Yl46u9Ed90IdnXZBvo5bdB3d7d5EkyZLdUNerRkSq1Ft903WVYo7MogRA3ViWpcH7NLvEpUsBuFk3Hf1geJ3PkofeezYYjeg+Q/Rv8sh7uB09AAB47hdjWkJ38ZMLswAAAABJRU5ErkJggg=='
  },

  {
    name: 'Munch',
    id: 2,
    description: 'A RESTful API web application built using Express, Node.js, and PSQL as the database. The app allows users to search for eateries near them using zipcode to search the area using API to return information about the locations.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAC4CAMAAAD9ogFoAAAAclBMVEUAAAD///8vLy9QUFATExPx8fG4uLiHh4fg4OBBQUHJyclfX18ICAgEBAT4+Pienp6QkJA0NDQbGxvR0dFwcHBoaGggICA6OjpJSUmsrKympqYXFxeBgYFOTk5ZWVnZ2dmOjo6/v79kZGR5eXkmJibn5+eJjuMZAAADxElEQVR4nO3d4XaiOhQFYCAR0AAKEkJFqQp9/1ec0Kkt93acrrsWJLk5+/vTLrGSXfEEIpAgAAAgImfea59E56H3UkRH9K/oG7MK3ZbC7CqP/636rSbW0RPbjbCDcPSMc57ZbgSsK9nNqNkCHs8WnKy1b0WneS8z362qNrMFrtTgRX2LPpxOpz6gEH0fhpv95EUn3AZfFZ4f9h/SMNzZbuYaDvotzadfSh25DP7Uuel/SmyjaWtD9K/otd7E2fRA9kAm+kOVzvbqvSxzz6N7X+ER/St61zQN1z8zWX84onPzDe3or9Gk/1f0fIw+6Edutpu5hmkfvnj3sQ//iF69FcXnAi/L3LfDl0eZ87/CEz5ojbYzfLYgU7MF5dO/By98Hr7QQ3gwGtEpegxLAoDfON2vGwlXeESniHD0JoqiznYjAGB18nq9Pjtf13OEKzyiU3SO41jYbgTQlekNMG5st8KK96sgInPrm86Zys2t7m9MR3eowiO6MYjuAtPRR6WUIx2K6egOQXSKTEcX5/PZkaEKVHhjEP0HuYkdfdPRk9vtJn96UrYripfVm+Jkhc+OYYjoK3Iyej4cDvfV1+JkdDOMV/iiKNC52ZYdtMrc+hyKbhrh6GXbtqPtRgDA6tgwDFvbjbCDcIVHdIoOu92utt0IAID1vGw2m7PtRthBuHNDdIoUY4zmADAALa2UUv38NB8RrvCITtH+9fUVQxUA4LFTmqaD7UbYQbhzQ3SKWiEE7qcI4L9t3/dEhyUJV3hEp+j09vZGdB8eAGjYH49HoiOyhju3fLojirnV/ZXh6CxNU1cm1DEcXYTPZ+c1jdV1bfCbVpeiG4boFLkUXV0uF4MXe7kUnXCFR3RTXIpu+Mxol6IbhugUIboTpuvcfrwlz3Jcik64c0N0U1yK3pu9ft2l6IYRjj5KKTFznnXTnLVLDlVUs9Ox1GXBF17e0hW+HS7Xtq7FWXYBl6582/BHS0ePWJmwSLH63gVKkIoe/E6bZ7nTsSeLb/DyUrVdIPZ97Xz2hZWsFDIP+lH+Y6JvCrgSY1sFTVs5cjtmg/LpXrtNELzPj5dROvN4bLZye+/vfS1EFfC+lJI5OptQEsfxkvdJjWpWMymugzgn+r3fllEpDgu+/oKWP2jl/5epIJeOnrVqVBXnemOvszLiDn/Yl46u9Ed90IdnXZBvo5bdB3d7d5EkyZLdUNerRkSq1Ft903WVYo7MogRA3ViWpcH7NLvEpUsBuFk3Hf1geJ3PkofeezYYjeg+Q/Rv8sh7uB09AAB47hdjWkJ38ZMLswAAAABJRU5ErkJggg=='
  },

]


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" 
          render={() => {
            return <Portfolio projectsList={projectsList} />
          }}  
        />
        <Route path="/portfolio/:id"
          render={(routeInfo) => {
            const id = routeInfo.match.params.id;
            const targetProject = projectsList.find((project) => project.id === parseInt(id))
            return <Projects project={targetProject} />
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
