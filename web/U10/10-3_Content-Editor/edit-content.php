<?PHP
if ( isset($_POST[ 'top_header' ]) && isset($_POST[ 'sub_header' ]) ){
    $header = $_POST[ 'top_header' ];
    $subheader = $_POST[ 'sub_header' ];
    $content = $_POST['content'];


    $file = "./navigatorData.json";
    $filedata = file_get_contents($file);
    $arr_data = json_decode($filedata, true);
    $arr_data[$header][$subheader]['content'] = $content;

    
    if(file_put_contents($file, json_encode($arr_data, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE))){
        echo "{ok: true}";
    }
    
}

?>

