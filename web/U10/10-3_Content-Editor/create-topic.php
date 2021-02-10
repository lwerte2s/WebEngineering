<?PHP
if ( isset($_POST[ 'newtopic' ]) && isset($_POST[ 'top_header' ]) ){
    $header = $_POST[ 'top_header' ];
    $newtopic = $_POST['newtopic'];


    $file = "./navigatorData.json";
    $filedata = file_get_contents($file);
    $arr_data = json_decode($filedata, true);
    $myobj = new stdClass();
    $myobj->content = "insert content";
    $myobj->references = [];

    $arr_data[$header][$newtopic] = $myobj;


    if(file_put_contents($file, json_encode($arr_data, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE))){
        echo "{ok: true}";
    }

}

?>