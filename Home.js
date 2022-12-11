import AddDynamicInput from './AddDynamicInput';
const Home = () => {


    const letters = ['A', 'L', 'I'];
    const data = [
        { title: "Learn React", priority: "high" },
        { title: "Learn C++", priority: "high" },
        { title: "Play video games", priority: "medium" },
        { title: "Do the homework", priority: "medium" },
        { title: "Do the homework", priority: "medium" },
        { title: "Do the homework", priority: "medium" },
    ]

    return (

        <div className="general">
            <div className="header">
                <div>
                    {letters.map((name) => { return <span class="home_pret"><h3 id='h3_home'>{name}</h3></span> })}
                </div>
                <div id="link1_h">
                    <h6 >Link1</h6>
                </div>
                <div class="vl"></div>
                <div id="link2_h">
                    <h6>Link2</h6>
                </div>
                <div class="vl2"></div>
                <div id="bootstrap_home_button">
                    <button type="button" class="btn btn-light" >Button</button>
                </div>
            </div>
            <div className="search_div">
                <input id="search_box" type="search" placeholder="Type The Task.." />
                <div id="search_b1">
                    <button type="button" class="btn btn-danger">Priority</button>
                </div>
                <div id="search_b2">
                    <button type="button" class="btn btn-primary">Add</button>
                </div>
            </div>
            <div id="to_do">
                <h4> To do List</h4>
            </div>
            
            <div>
                {
                    data.map((element) => {
                        return (
                            [
                                <div class="grid-container">
                                    <span class="grid-item">
                                        <span className="col-sm-6">
                                    
                                                <span className="card-body">
                                                    <h5 className="card-title">{element.title}</h5>
                                                    <p className="card-text">{element.priority}</p>
                                                 </span>
                                     
                                        </span>
                                    </span> 
                                </div>
                            ]
                        );
                    })
                }
            </div>
        </div>


    );
};
export default Home;