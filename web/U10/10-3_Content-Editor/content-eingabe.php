<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <title>10-3</title>

</head>
<body>


<style>
    textarea {
        box-sizing: border-box;
        display: flex;
        resize: vertical;
        width: 50rem;
        height:15rem;
        font-size: 1.5rem;
    }

    button {
        margin: 1rem;
    }

    legend {
        background-color: rgb(35, 39, 47);
        color: white;
        font-size: 2rem;
        border: 1px solid white;
    }

    fieldset {
        border: #2a3345;
        background-color: #2a3345;
        border-radius: 1rem;
    }

    select {
        background-color: rgb(35, 39, 47);
        color: white;
        padding: 0.5rem;
        font-size: 1.5rem;
    }

    select:hover {
        cursor: pointer;
    }

    #btn {
        box-sizing: border-box;
        position: relative;
        right: 1rem;
        color: white;
        background-color: rgb(35, 39, 47);

        text-align: center;
        font-size: 2vh;
        padding: 0.5vh;
        border: none;
        width: 50rem;
        margin-top: 2px;
        border: 1px solid white;
    }

    #btn:hover {
        background-color: white;
        color: black;
        border: 1px solid red;
        font-weight: bold;
        cursor: pointer;
    }


</style>
<form  id="edit-form">
    <fieldset>
        <legend>Select a topic and add new text:</legend>
        <select  name="top_header" id="top_header">
            <option value="" disabled selected >Select Topic</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
        </select>
        <select name="sub_header" id="sub_header">
        </select>
        <textarea name="content" id="content"></textarea>
        <button id="btn">Save</button>
    </fieldset>
</form>
<script type="text/javascript">
<?PHP
 $file = './navigatorData.json';
 $contents = file_get_contents( $file );
 $json = json_decode( $contents, true );
?>
    let json = <?PHP echo json_encode($json) ?>;
    const top_header = document.querySelector('select[name="top_header"]');
    const sub_header = document.querySelector('select[name="sub_header"]');
    top_header.addEventListener('change', e => {
        sub_header.innerHTML = "";
        Object.keys(json[e.target.value]).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.innerText = key;
            sub_header.append(option);
        });

        sub_header.addEventListener('change', e => {
            let header = document.getElementById('top_header').value;
            let subheader = document.getElementById('sub_header').value;
            document.getElementById('content').innerHTML = json[header][subheader]['content'];
        });

        let header = document.getElementById('top_header').value;
        let subheader = document.getElementById('sub_header').value;
        document.getElementById('content').innerHTML = json[header][subheader]['content'];


    });


document.getElementById('btn').addEventListener('click', async function(event) {
    //event.preventDefault();
    let response = await (await fetch(new Request("./edit-content.php"), {
        method: "POST",
        body: new FormData( document.getElementById('edit-form'))
    }));
});

</script>
</body>

</html>