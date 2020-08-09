import React from 'react';
export default  class Donald extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userData: []
      };
    }
  //calling the api to get tweets data
    componentDidMount() {
      const url = 'http://localhost:3001/api/'
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              userData: result
            });
          },
        )
    }

    render() {
        return (      
        <div className="search">
              <h1>Tweet List(Donald Trump)</h1>
          {/* if their is no data */}
           {this.state.userData.length===0 &&
               <h3>Sorry, No tweets :(</h3>
            }  
          {/* if their is data */}
          {this.state.userData.length>0 &&
              <h2>Total record : {this.state.userData.length}</h2>
          }  
            {this.state.userData.length>0 &&
            <table>
              <thead>
              <tr>
                <td>Sr. No</td>
                <td>Title</td>            
                <td>Date</td>
              </tr>
              </thead>
              <tbody>
              {this.state.userData.map((item,i) => (
                <tr key={item.id}>
                <td>{i+1}</td>
                <td>{item.title}</td>               
                <td>{item.date || 'NA'}</td>
                </tr>
              ))}
              </tbody>
            </table>
            }
          </div>
        );
    }
  }
  