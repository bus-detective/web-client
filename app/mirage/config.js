export default function() {
  this.namespace = 'api'; 

  this.get('/stops', function(db, request) {
    return {
      data: {
        results: db.stops,
        page: request.queryParams.page,
        total_results: db.stops.length,
        total_pages: db.stops.length / 20,
        per_page: 20
      }
    };
  });
}

