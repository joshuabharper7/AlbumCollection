export default {
    DisplayReview,
}

function DisplayReview(review){
    return `
        <h1>${review.reviewername}</h1>
        
        <h4>${review.content}</h4>
        
    `;
}