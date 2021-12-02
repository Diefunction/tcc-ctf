<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- force IE browsers in compatibility mode to use their most aggressive rendering engine -->
        <meta name="description" content="Welcome to health application for real-time and historical data on system performance.">
        <meta charset="utf-8">
        <title>Health Status</title>

        <!-- mobile IE allows us to activate ClearType technology for smoothing fonts for easy reading -->
        <meta http-equiv="cleartype" content="on">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

        <!-- bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <head>
    <body>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Server Name</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Health Application</th>
                <td>Running</td>
                </tr>
            </tbody>
        </table>
        <form action="/internal/monitor.php" method="post">
            <div class="form-group">
                <label for="logfile">Log file path</label>
                <input type="text" class="form-control" id="logfile" name="logfile" placeholder="file path">
            </div>
            <button type="submit" class="btn btn-primary">Get Content</button>
        </form>
    </body>
</html>