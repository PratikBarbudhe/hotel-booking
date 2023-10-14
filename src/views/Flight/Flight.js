import './Flight.css';
import Navbar from '../../component/Navbar/Navbar';

function Flight() {
    return ( <
        >
        <
        div >
        <
        div className = "background-image main-div" >
        <
        h1 className = 'sub-heading' > ... < /h1> <
        h1 className = 'main-heading' > Compare and book flights with ease < /h1> <
        button className = 'btn-discover-more' > Discover More < /button> < /
        div > <
        /div>   

        <
        div className = 'main-div' >
        <
        p className = 'headline-1' > Discover your next dream destination < /p> <
        input type = 'radio'
        value = 'city'
        name = 'r1'
        className = 'btn-radio' / > Round trip <
        input type = 'radio'
        value = 'city'
        name = 'r1'
        className = 'btn-radio' / > One way <
        input type = 'radio'
        value = 'city'
        name = 'r1'
        className = 'btn-radio' / > Multi - city

        <
        select className = 'flight-list' >
        <
        option > Economy < /option> <
        option > Premium economy < /option> <
        option > Business < /option> <
        option > First class < /option> < /
        select >

        <
        select className = 'flight-list' >
        <
        option > Adults < /option> <
        option > Childrens < /option>  < /
        select >

        <
        input type = 'checkbox'
        value = 'direct flights only'
        className = 'btn-radio' / > Direct flights only

        <
        /div> 

        <
        div className = 'main-div' >
        <
        input type = "text"
        className = 'search-box'
        placeholder = 'Where from?' / >

        <
        input type = "text"
        className = 'search-box'
        placeholder = 'Where to?'
        id = 'search-box' / >

        <
        input type = "date"
        className = 'search-box'
        id = 'search-b0x2' / >

        <input type='button' value="Search" className='btn-search' />

        <
        /div>

        <
        h1 className = 'heading-2' > Popular flights near you < /h1> <
        p className = 'heading-3' > Find deals on domestic and international flights < /p>

        <
        />


    )
}
export default Flight