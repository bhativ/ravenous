const apiKey = '2OnaAJP_ujvkcgh0xe16CLPZxZBMBFdReGhPXbmFiOZ85EDwDBOlHgmFgMJqD74oQKgEyceq6qU8_o9BJ5UIITCv1X8EwGgMUiL-KnRSC3EAlJn7-Ol8TmVOAW71XXYx';
const Yelp = {
    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer${apiKey}`,
            },
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses){
                console.log(jsonResponse)
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                });
            }
        });
    }
};

export default Yelp;
