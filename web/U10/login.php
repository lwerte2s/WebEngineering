<?PHP
if ( isset($_POST[ 'account' ]) && isset($_POST[ 'password' ]) ) {
    $account = $_POST['account'];
    $passwd = $_POST['password'];

    $lines = file('./raw_passwd.csv');

    $loggedIn = false;

    foreach ($lines as $line_num => $line) {
        list($user, $saved_passwd) = explode(",", $line);
        if ( (strcmp(trim($user), trim($account))===0 && strcmp(trim($passwd) ,trim($saved_passwd))===0)) {
            $loggedIn = true;
            break;
        }

    }
    if( $loggedIn === true) {
        //echo "<script>alert('Login successfull!')</script>";
        header("Location: welcome.html");
        exit;
    } else {
        header("Location: login.html");
        exit;
    }

}
?>

