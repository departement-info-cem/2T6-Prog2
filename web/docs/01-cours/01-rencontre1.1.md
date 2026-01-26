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
        :::tip Cours de Programmation Objet en TI
        Le plan de cours est disponible sur LÉA.
        Notez que :
        - Le cours est en Python.  
         Il s'agit d'un nouveau langage et donc les premières rencontres consisteront en une révision des concepts du cours de programmation 1, mais dans le langage Python.
        - L'emphase du cours est sur les Principes de Programmation Orientée Objet.
        - Vous allez réutiliser les concepts du cours dans le cours 3T5-Automatisation de tâches et dans le 6X5-EM Projet en TI.
        - Python est le langage préféré pour la gestion de réseaux Linux.

        :::

        :::info Notez
        Les travaux pratiques vont être commencés durant les séances de cours et vont nécessiter plusieurs remises via GitHub.
        
        La présence en cours est **obligatoire**. Une absence à 20% des séances peut entrainer une expulsion.
        
        :::


        :::warning  Attention à l'IA
        L'utilisation d'intelligence artificielle générative (IAg) peut être tentante, toutefois, cela nuit à votre apprentissage dans le cadre du cours.

        Les problèmes vus en cours sont là pour faciliter votre apprentissage. Oui, une IAg est capable de faire le code pour passer à travers une liste ou traiter un fichier texte. Le but est que vous appreniez comment le faire par vous-mêmes. Si vous utilisez une IAg pour répondre aux questions, vous n'apprendrez rien.

        L'utilisation d'IAg est donc **interdite** dans le cadre du cours.
        :::

        :::danger Plagiat →  0%
        Donner son travail à quelqu'un d'autre est un cas de plagiat, les deux personnes ayant remis le travail ont 0 et un rapport
        
        Faire un travail individuel en équipe et être plusieurs à remettre le même travail est un cas de plagiat.
        
        L'utilisation d'IA pour générer le code utilisé dans les projets est du plagiat. Vous devez comprendre et être capable d'expliquer vos travaux.
        
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
                <td valign="top">
                
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
                        Console.WriteLine($"Bienvenue au Gym. ({age} ans)");
                        Console.WriteLine("Vous devez être accompagné.");
                    }
                    else 
                    { 
                        Console.WriteLine($"Bienvenue au gym {prenom}! ({age} ans)"); 
                    }
                    ```
                
                </td>
                <td valign="top">

                    ```python
                    prenom:str = input("Entrez votre nom : ")
                    age:int = int(input("Entrez votre âge : "))

                    if age < 14 :
                        print("Vous ne pouvez pas accéder au gym.")
                        print(f"Revenez dans {14 - age} ans avec un accompagnateur.")
                    elif age < 18 :
                        print(f"Bienvenue au Gym. ({age} ans)")
                        print("Vous devez être accompagné.")
                    else :
                        print(f"Bienvenue au gym {prenom}!")
                    ```

                </td>
            </tr>
        </table>

        :::note notez:

        - Python n'utilise **PAS** les accolades pour déterminer les blocs de code.

        Le langage utilise les espaces (ou tabulations) et les **:** pour indiquer les blocs de code.

        - L'indicateur de type est *optionnel* et après la déclaration de la variable.


        :::       
   
        ---

    </TabItem>

   

    

    <TabItem value="types" label="Types">



    </TabItem>

    <TabItem value="variables" label="Variables">

        

    </TabItem>

</Tabs>