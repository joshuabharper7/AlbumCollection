export default {
    DisplayReview,
}

function DisplayReview(review){
    return `
        
        <h1><label><strong>Posted By: </strong></label>${review.reviewername}</h1>
        
        <h4><label>Review Content: </label>${review.content}</h4>

        <h4><label>Album: </label>${review.album.title}</h4>
    `;
}