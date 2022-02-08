package com.hope.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class initialPageController {

    @GetMapping("/")
    public String page(){
        return "Welcome to hope-commerce Company!";
    }
}
