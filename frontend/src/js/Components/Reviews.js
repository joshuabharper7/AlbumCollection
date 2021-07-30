export default function Reviews(reviews) {
    return `
    <h1 class="font-effect-fire">List of reviews</h1>
    <ol>
        ${reviews.map(review => {
        return `
                <li>
                    <h4 class="review_name" id="${review.id}">Posted By: ${review.reviewername}</h4> 
                    <button class="review_edit" id="${review.id}">Edit</button>
                    <button class="review_delete" id="${review.id}">Delete</button>
                </li>
            `;
    }).join('')}
    </ol>

    <section class="reviewForm">
    <label>Add Review: </label><select id="albums">
    </select>
    <br/>
    <label>Content: </label><textarea id="reviewContent" rows="5" cols="30">Review Content....</textarea>
    <br/>
    <label>Name: </label><input type="text" id="reviewerName" placeholder='Enter Your Name' />
    <br/>
    <br/>
    <button id="saveReviewButton">Add Review</button>
    </section>
    `;
}