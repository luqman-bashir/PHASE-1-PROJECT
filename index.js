const videosContainer = document.getElementById("videos");
const videoForm = document.getElementById("video-form");
let editMode = false;
let currentVideoId = null;


class Video {
    constructor(id, title, description, url, thumbnail) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.thumbnail = thumbnail;
    }
}

function fetchVideos() {
    return fetch('http://localhost:3000/videos')
        .then(response => response.json())
        .then(data => {
            renderVideos(data);
            return data; 
        })
        .catch(err => console.error('Error fetching videos:', err));
}

function renderVideos(videos) {
    videosContainer.innerHTML = "";
    videos.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("col-md-4", "mb-3");
        videoElement.innerHTML = `
            <div class="card">
                <img src="${video.thumbnail}" class="card-img-top" alt="${video.title} Thumbnail">
                <div class="card-body">
                    <h5 class="card-title">${video.title}</h5>
                    <p class="card-text">${video.description}</p>
                    <a href="${video.url}" target="_blank" class="btn btn-primary">Watch</a>
                    <button class="btn btn-warning mt-2" onclick="startEditVideo('${video.id}')">Edit</button>
                    <button class="btn btn-danger mt-2" onclick="deleteVideo(event, '${video.id}')">Delete</button>
                </div>
            </div>
        `;
        videosContainer.appendChild(videoElement);
    });
}

videoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const url = document.getElementById("url").value.trim();

    
    if (!title || !description || !url) {
        alert("Please fill out all fields.");
        return;
    }

    const videoData = new Video(
        editMode ? currentVideoId : undefined,
        title,
        description,
        url,
        "https://img.youtube.com/vi/" + url.split("v=")[1] + "/0.jpg"
    );

    if (editMode) {
        updateVideo(currentVideoId, videoData);
    } else {
        createVideo(videoData);
    }

    videoForm.reset();
    editMode = false;
    currentVideoId = null;
});

function createVideo(video) {
    fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(video)
    })
        .then(response => response.json())
        .then(() => {
            fetchVideos(); 
        })
        .catch(err => console.error('Error adding video:', err));
}

function startEditVideo(id) {
    fetch(`http://localhost:3000/videos/${id}`)
        .then(response => response.json())
        .then(video => {
            document.getElementById("title").value = video.title;
            document.getElementById("description").value = video.description;
            document.getElementById("url").value = video.url;

            editMode = true;
            currentVideoId = video.id;

            window.scrollTo(0, 0);
        })
        .catch(err => console.error('Error fetching video details:', err));
}

function updateVideo(id, updatedVideo) {
    fetch(`http://localhost:3000/videos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedVideo)
    })
        .then(() => {
            fetchVideos();
        })
        .catch(err => console.error('Error updating video:', err));
}

function deleteVideo(event, id) {
    event.preventDefault();
    if (confirm("Are you sure you want to delete this video?")) {
        fetch(`http://localhost:3000/videos/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                fetchVideos();
            })
            .catch(err => console.error('Error deleting video:', err));
    }
}


function searchVideos(query) {
    fetchVideos().then(videos => {
        const filteredVideos = videos.filter(video => 
            video.title.toLowerCase().includes(query.toLowerCase())
        );
        renderVideos(filteredVideos);
    });
}


document.getElementById("search-input").addEventListener("input", function () {
    searchVideos(this.value);
});


fetchVideos();
