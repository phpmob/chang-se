<?php

declare(strict_types=1);

namespace Chang\Standard\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class AccountController extends Controller
{
    public function indexAction(): Response
    {
        return $this->render('account/index.html.twig');
    }
}
