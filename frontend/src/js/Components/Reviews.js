export default function Reviews(reviews) {
    return `
    <h1>List of reviews</h1>
    <ol>
        ${reviews.map(reviews => {
        return `
                <li>
                    Review: ${reviews.content} - Reviewer Name: ${reviews.reviewername} 
                    <button class="review_edit">Edit</button>
                    <button class="review_delete">Delete</button>
                </li>
            `;
    }).join('')}
    </ol>

    <section class="reviewForm">
    <select id="albums">
    </select>
    <input type="text" id="reviewContent" placeholder='Enter Review Here' />
    <input type="text" id="reviewerName" placeholder='Enter Your Name' />
    
    <button id="saveReviewButton">Add Review</button>
    </section>
    `;
}