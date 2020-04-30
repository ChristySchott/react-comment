import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className= "ui container comments">
      <ApprovalCard>
          <h4>Warning!</h4>
          <p>Are you sure you want to do this?</p>
      </ApprovalCard>

      <ApprovalCard>      
          <CommentDetail 
            author="Sam"  
            timeAgo="Today at 4:45PM" 
            comment="Nice blog post"
            avatar={faker.image.avatar()} 
          />
      </ApprovalCard>

      <ApprovalCard>  
        <CommentDetail 
            author="Alex" 
            timeAgo="Today at 2:00PM" 
            comment="I like the subject"
            avatar={faker.image.avatar()} 
        />
      </ApprovalCard>  

      <ApprovalCard>  
        <CommentDetail 
            author="Jane" 
            timeAgo="Yesterday at 12:50PM" 
            comment="I don't like the image"
            avatar={faker.image.avatar()} 
        />
      </ApprovalCard>  

      <ApprovalCard>  
        <CommentDetail 
            author="John" 
            timeAgo="Last Week at 1:05AM" 
            comment="Congratulations, Juan"
            avatar={faker.image.avatar()} 
        />
      </ApprovalCard>  

      <ApprovalCard>  
        <CommentDetail 
            author="Anne" 
            timeAgo="Las Week at 8:20PM" 
            comment="Nice! I miss you"
            avatar={faker.image.avatar()} 
        />
      </ApprovalCard>  

      </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))