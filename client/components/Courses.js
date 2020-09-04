import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

/*
This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. 
Each course needs to link to its respective "Course Detail" screen. 
This component also renders a link to the "Create Course" screen.
*/

const Courses = () => {

    const [courses] = useState([]);

    return (
        <BrowserRouter>
            <Switch>
                <Header />
                <div className="bounds">
                    {/* {this.props.courseData.map((course) => (
                    <div className="grid-33" key={course.id}>
                        <Route path="/CourseDetail" className="course--module course--link" component={CourseDetail}>
                            <h4 className="course--label">Courses</h4>
                            <h3 className="course--title">{course.title}</h3>
                        </Route>
                    </div>
                    ))}
                    <Route path="/createCourse" component={CreateCourse} /> */}
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default Courses;