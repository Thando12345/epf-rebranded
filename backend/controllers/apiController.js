// Dummy data for the frontend to fetch
exports.getHomeData = (req, res) => {
    res.json({
      title: "Welcome to the Empire Partner Foundation",
      description: "Driving innovation and technology to solve Africa's problems.",
    });
  };
  
  exports.getServicesData = (req, res) => {
    res.json({
      services: [
        { name: "Technology Development", description: "Innovative solutions for the community." },
        { name: "Youth Empowerment", description: "Programs focused on empowering Africa's youth." }
      ]
    });
  };
  