---
title: 1.1 - Intro Au Cours
description: Python, VSCode, GitHub
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Intro au cours, à Python, et à GitHub

## Qu'est-ce que Python et comment travailler avec.

<Tabs queryString="onglet">

    <TabItem value="Plan" label="Plan de cours" default>
        :::note Notez
        zone de note
        :::

        :::test
        zone normal
        :::
        

        :::tip 
        tip
        :::

        :::info information
        zone info
        :::

        :::warning  attention à l'IA
        zone warning
        :::

        :::danger attention !!!1
        zone danger
        :::




    </TabItem>

    <TabItem value="intro" label="Introduction à Python">


        :::tip Pourquoi apprendre Python ?

        Python en réseautique

        :::

        :::info Fonctionnement de Python et outils de développement

        Python est un **langage interprété**...
        
        VSCode dans ce cours

        Sources en ligne :
            - [Documentation officiel](https://docs.python.org/fr/3.14/)
            - [Tutoriels w3school](https://www.w3schools.com/python/) (en anglais seulement)
            - [Cours de Python pour les sciences natures](https://info.cegepmontpetit.ca/420-SN1/)
        :::


        :::warning Installation de VSCode et de Python

        Pour travailler sur votre ordinateur personnelle, vous aurez besoin d'installer le language Python, ainsi que l'IDE VSCode et l'utilitaire GitHub Desktop.
   
        Pour installer VSCode et Python [ce guide pas à pas](/recettes/installer_VSCode_python)

        Pour installer GitHub Desktop [suivez ces instructions](/recettes/depart_github#télécharger-github-desktop)

        :::

    </TabItem>

    <TabItem value="bases" label="Les bases de Python">

        ::::danger Définition des blocs d'instructions

        Fait avec tabulation / espace

        ::::

        <table>
            <tr>
                <th>Code simple en C#</th>
                <th>Même code en Python</th>
            </tr>
            <tr>
                <td>
                
                    ```csharp
                    Console.Write("Entrez votre nom : ");
                    string prenom = Console.ReadLine();

                    Console.Write("Entrez votre âge : ");
                    int age = int.Parse(Console.ReadLine());

                    if (age < 14)
                    {
                        Console.WriteLine("Vous ne pouvez pas accéder au gym.");
                        Console.WriteLine($"Revenez dans {14 - age} ans avec un accompagnateur.");
                    }
                    else if (age < 18)
                    {
                        Console.WriteLine("Vous ne pouvez pas accéder au gym sans être accompagné(e).");
                        Console.WriteLine("Assurez-vous d'être accompagné lors de votre visite");
                    }
                    else 
                    { 
                        Console.WriteLine($"Bienvenue au gym {prenom}! ({age} ans)"); 
                    }
                    ```
                
                </td>
                <td>

                    ```python
                    prenom:str = input("Entrez votre nom : ")
                    age:int = int(input("Entrez votre âge : "))

                    if age < 14 :
                        print("Vous ne pouvez pas accéder au gym.")
                        print(f"Revenez dans {14 - age} ans avec un accompagnateur.")
                    elif age < 18 :
                        print("Vous ne pouvez pas accéder au gym sans être accompagné(e).")
                        print("Assurez-vous d'être accompagné lors de votre visite")
                    else :
                        print(f"Bienvenue au gym {prenom}! ({age} ans)")
                    ```

                </td>
            </tr>
        </table>

        :::note notez:

        - Python n'utilise **PAS** les accolades
        - **:** et espaces


        :::       
   
        ---

    </TabItem>

   

    

    <TabItem value="types" label="Types">



    </TabItem>

    <TabItem value="variables" label="Variables">

        

    </TabItem>

</Tabs>