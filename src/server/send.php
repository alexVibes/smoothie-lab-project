<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['averageCheck'])&&$_POST['averageCheck']!="")&&(isset($_POST['benefit'])&&$_POST['benefit']!="")&&(isset($_POST['format'])&&$_POST['format']!="")&&(isset($_POST['contacts'])&&$_POST['contacts']!="")){
        $to = 'o.morgun@hotmail.com';
        $subject = 'Заявка с сайта';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p><strong>1. Название Вашего предприятия, город</strong></p>
                        <p>'.$_POST['name'].'</p>
                        <p><strong>2. Средний чек (для кафе, ресторанов):</strong></p>
                        <p>'.$_POST['averageCheck'].'</p>
                        <p><strong>3. Считаете ли Вы, что дополнительное здоровое меню будет полезно Вашему заведению и Вашим гостям?</strong></p>
                        <p>'.$_POST['benefit'].'</p>
                        <p><strong>4. Какой из форматов сотрудничества Вам предпочтительнее? Готовы к Вашим предложениям.</strong></p>
                        <p>'.$_POST['format'].'</p>
                        <p><strong>5. Ваши контакты (e-mail, телефон).</strong></p>
                        <p>'.$_POST['contacts'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Smoothie.Lab.Website \r\n";
        mail($to, $subject, $message, $headers);
    }
?>