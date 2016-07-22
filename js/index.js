const evaBotId = "a75bac727ec60245c9b14c4c04";

function httpPostComment() {
    var postText = document.getElementById("commentText").value;
    var jsonString = '{"bot_id":"' + evaBotId + '","text":"' + postText + '"}';
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.groupme.com/v3/bots/post", true);
    xhttp.send(jsonString);
    document.getElementById("commentText").value = "Eva posted your message. Type another message?";
}

function httpPostImage() {
    var postText = document.getElementById("commentText").value;
    var postImage = document.getElementById("imageLink").value;
    var jsonString = '{"bot_id":"' + evaBotId + '","text":"' + postText + '",' +
    '"attachments":[{"type":"image","url":"' + postImage + '"}]}';
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.groupme.com/v3/bots/post", true);
    xhttp.send(jsonString);
    document.getElementById("commentText").value = "Eva posted your message. Type another message?";
    document.getElementById("imageLink").value = "Eva posted your image. Paste another link?";
}