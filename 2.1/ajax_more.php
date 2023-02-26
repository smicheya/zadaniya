<?php 

$html = '<li>Товар</li>
         <li>Товар</li>
         <li>Товар</li>';
         
echo json_encode(array(
        'result'    => 'success',
        'html'      => $html
));
