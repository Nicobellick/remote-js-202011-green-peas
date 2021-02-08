import Card from "./Card";
import React from "react";
import "./Food.css";

class Food extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: [
        { nom: "Pastis", ef: "0.12" },
        { nom: "Eau de vie", ef: "0.12" },
        { nom: "Gin", ef: "0.12" },
        { nom: "Liqueur", ef: "0.25" },
        { nom: "Rhum", ef: "0.12" },
        { nom: "Whisky", ef: "0.12" },
        { nom: "Vin doux", ef: "0.17" },
        { nom: "Apéritif à base de vin ou vermouth", ef: "0.17" },
        { nom: "Vodka", ef: "0.12" },
        { nom: "Cocktail à base de rhum", ef: "0.14" },
        { nom: "Cocktail à base de whisky", ef: "0.10" },
        { nom: "Alcool pur", ef: "0.12" },
        { nom: "Marsala", ef: "0.18" },
        { nom: "Sangria", ef: "0.22" },
        { nom: "Kir (au vin blanc)", ef: "0.20" },
        { nom: "Kir royal (au champagne)", ef: "0.20" },
        { nom: "Crème de cassis", ef: "0.23" },
        { nom: "Cocktail type punch, 16% alcool", ef: "0.14" },
        { nom: "Eau de vie de vin, type armagnac, cognac", ef: "0.12" },
        { nom: "Saké ou Alcool de riz", ef: "0.12" },
        { nom: "Jus multifruit, pur jus, multivitaminé", ef: "0.15" },
        {
          nom: "Cocktail sans alcool (à base de jus de fruits et de sirop)",
          ef: "0.13",
        },
        { nom: "Jus multifruit - base orange, multivitaminé", ef: "0.15" },
        { nom: "Jus d'orange, maison", ef: "0.27" },
        { nom: "Jus multifruit, pur jus, standard", ef: "0.15" },
        { nom: "Nectar multifruit, multivitaminé", ef: "0.15" },
        { nom: "Nectar multifruit, standard", ef: "0.15" },
        { nom: "Jus multifruit, à base de concentré, standard", ef: "0.15" },
        { nom: "Jus de pomme, pur jus", ef: "0.08" },
        { nom: "Smoothie", ef: "0.11" },
        {
          nom: "Lait 1er âge, poudre soluble (préparation pour nourrissons)",
          ef: "1.56",
        },
        {
          nom: "Lait 2e âge, poudre soluble (préparation de suite)",
          ef: "1.56",
        },
        { nom: "Tapioca ou Perles du Japon, cru", ef: "0.15" },
        { nom: "Pomme de terre, sans peau, cuite au four", ef: "0.14" },
        { nom: "Pomme de terre, bouillie/cuite à l'eau", ef: "0.12" },
        { nom: "Chips de pommes de terre, standard", ef: "0.29" },
        { nom: "Pomme de terre, sans peau, crue", ef: "0.07" },
        { nom: "Pomme de terre noisette, surgelée, crue", ef: "0.41" },
        { nom: "Pomme de terre vapeur, sous vide", ef: "0.12" },
        { nom: "Pomme de terre, sautée/poêlée", ef: "0.11" },
        {
          nom: "Pomme de terre, flocons déshydratés, au lait ou à la crème",
          ef: "0.20",
        },
        {
          nom:
            "Pomme de terre, purée à base de flocons, reconstituée avec lait entier, matière grasse",
          ef: "0.20",
        },
        {
          nom: "Pomme de terre, purée, avec lait et beurre, non salée",
          ef: "0.20",
        },
        {
          nom:
            "Pomme de terre, purée à base de flocons, reconstituée avec lait demi-écrémé et eau, non salée",
          ef: "0.20",
        },
        { nom: "Pomme de terre dauphine, surgelée, crue", ef: "0.29" },
        { nom: "Pomme de terre dauphine, surgelée, cuite", ef: "0.45" },
        { nom: "Pomme de terre, flocons déshydratés, nature", ef: "0.16" },
        { nom: "Pomme de terre nouvelle, crue", ef: "0.07" },
        { nom: "Pomme de terre, rôtie/cuite au four", ef: "0.14" },
        { nom: "Pomme de terre rissolée, surgelée, cuite", ef: "0.16" },
        {
          nom:
            "Pomme de terre de conservation, sans peau, bouillie/cuite à l'eau",
          ef: "0.12",
        },
        {
          nom: "Pomme de terre primeur, sans peau, bouillie/cuite à l'eau",
          ef: "0.12",
        },
        {
          nom: "Frites de pommes de terre, surgelées, rôties/cuites au four",
          ef: "0.17",
        },
        {
          nom: "Frites de pommes de terre, surgelées, cuites en friteuse",
          ef: "0.23",
        },
        { nom: "Pomme de terre duchesse, surgelée, cuite", ef: "0.36" },
        { nom: "Pomme de terre noisette, surgelée, cuite", ef: "0.62" },
        {
          nom: "Pomme de terre sautée/poêlée à la graisse de canard",
          ef: "0.07",
        },
        { nom: "Chips de pommes de terre, à l'ancienne", ef: "0.29" },
        {
          nom:
            "Chips de pommes de terre et assimilés, allégées en matière grasse",
          ef: "0.29",
        },
        { nom: "Rostis ou Galette de pomme de terre", ef: "0.19" },
        {
          nom: "Aligot (purée de pomme de terre à la tomme fraîche)",
          ef: "0.37",
        },
        { nom: "Pomme de terre duchesse, surgelée, crue", ef: "0.23" },
        { nom: "Pomme de terre rissolée, surgelée, crue", ef: "0.09" },
        {
          nom:
            "Frites de pommes de terre, surgelées, pour cuisson rôtie/ au four",
          ef: "0.17",
        },
        {
          nom: "Frites de pommes de terre, surgelées, pour cuisson micro-ondes",
          ef: "0.14",
        },
        {
          nom: "Frites de pommes de terre, surgelées, pour cuisson en friteuse",
          ef: "0.17",
        },
        { nom: "Patate douce, crue", ef: "0.06" },
        { nom: "Patate douce, cuite", ef: "0.12" },
        { nom: "Patate douce, purée, cuisinée à la crème", ef: "0.18" },
        { nom: "Bière brune", ef: "0.12" },
        { nom: 'Bière "coeur de marché" (4-5° alcool)', ef: "0.12" },
        { nom: "Bière forte (>8° alcool)", ef: "0.12" },
        { nom: "Panaché (limonade et bière)", ef: "0.12" },
        { nom: "Panaché préemballé (<1° alc.)", ef: "0.12" },
        { nom: "Cidre brut", ef: "0.14" },
        { nom: "Cidre doux", ef: "0.14" },
        { nom: "Bière faiblement alcoolisée (3° alcool)", ef: "0.12" },
        { nom: 'Bière "spéciale" (5-6° alcool)', ef: "0.12" },
        {
          nom:
            "Bière \"de spécialités\" ou d'abbaye, régionales ou d'une brasserie (degré d'alcool variable)",
          ef: "0.12",
        },
        { nom: "Cidre traditionnel", ef: "0.14" },
        { nom: "Cidre bouché demi-sec", ef: "0.14" },
        { nom: "Cidre aromatisé (framboise)", ef: "0.14" },
        { nom: "Bière sans alcool (<1,2° alcool)", ef: "0.12" },
        { nom: "Pétillant de fruits", ef: "0.18" },
        { nom: "Vin blanc 11°", ef: "0.19" },
        { nom: "Vin blanc mousseux", ef: "0.19" },
        { nom: "Vin rouge 10°", ef: "0.18" },
        { nom: "Vin rouge 11°", ef: "0.18" },
        { nom: "Vin rouge 12°", ef: "0.18" },
        { nom: "Vin rosé 11°", ef: "0.17" },
        { nom: "Champagne", ef: "0.19" },
        { nom: "Vin rouge 13°", ef: "0.18" },
        { nom: "Vin blanc mousseux aromatisé", ef: "0.19" },
        { nom: "Vin blanc sec 11°", ef: "0.19" },
        { nom: "Boeuf, côte, crue", ef: "2.78" },
        { nom: "Boeuf, épaule, crue", ef: "2.77" },
        { nom: "Boeuf, entrecôte, partie maigre, grillée/poêlée", ef: "3.52" },
        { nom: "Boeuf, braisé", ef: "3.53" },
        { nom: "Boeuf, gîte à la noix, cru", ef: "2.77" },
        { nom: "Boeuf, entrecôte, crue", ef: "2.78" },
        { nom: "Boeuf, gîte à la noix, cuit", ef: "3.53" },
        { nom: "Boeuf, faux-filet, rôti/cuit au four", ef: "3.53" },
        { nom: "Boeuf, faux-filet, grillé/poêlé", ef: "3.51" },
        { nom: "Boeuf, faux-filet, cru", ef: "2.77" },
        { nom: "Boeuf, faux-filet, label rouge, cru", ef: "2.77" },
        { nom: "Boeuf, plat de côtes, cru", ef: "2.78" },
        { nom: "Boeuf, plat de côtes, braisé", ef: "3.54" },
        { nom: "Boeuf, hampe, crue", ef: "2.77" },
        { nom: "Boeuf, hampe, grillée/poêlée", ef: "3.51" },
        { nom: "Boeuf, joue, crue", ef: "2.77" },
        { nom: "Boeuf, joue, braisée ou bouillie", ef: "2.83" },
        { nom: "Boeuf, jarret, cru", ef: "2.78" },
        { nom: "Boeuf, jarret, bouilli/cuit à l'eau", ef: "3.54" },
        { nom: "Boeuf, tende de tranche, crue", ef: "2.77" },
        { nom: "Boeuf, tende de tranche, grillée/poêlée", ef: "3.51" },
        { nom: "Boeuf, tende de tranche, rôtie/cuite au four", ef: "3.53" },
        { nom: "Boeuf, steak ou bifteck, grillé", ef: "3.53" },
        { nom: "Boeuf, steak ou bifteck, cru", ef: "2.77" },
        { nom: "Boeuf, boule de macreuse, crue", ef: "3.46" },
        { nom: "Boeuf, onglet, cru", ef: "2.77" },
        { nom: "Boeuf, onglet, grillé", ef: "3.53" },
        { nom: "Boeuf, rumsteck, cru", ef: "2.77" },
        { nom: "Boeuf, rumsteck, grillé", ef: "3.53" },
        { nom: "Boeuf, boule de macreuse, grillée/poêlée", ef: "4.39" },
        { nom: "Boeuf, rosbif, rôti/cuit au four", ef: "3.53" },
        { nom: "Boeuf, bavette d'aloyau, grillée/poêlée", ef: "3.51" },
        { nom: "Boeuf, bavette d'aloyau, crue", ef: "2.77" },
        { nom: "Boeuf, boule de macreuse, rôtie/cuite au four", ef: "4.41" },
        { nom: "Boeuf, à bourguignon ou pot-au-feu, cuit", ef: "3.53" },
        { nom: "Boeuf, à bourguignon ou pot-au-feu, cru", ef: "2.77" },
        { nom: "Boeuf, collier, braisé", ef: "4.41" },
        { nom: "Bœuf, steak haché 5% MG, cru", ef: "3.42" },
        { nom: "Bœuf, steak haché 5% MG, cuit", ef: "4.34" },
        { nom: "Bœuf, steak haché 10% MG, cru", ef: "3.42" },
        { nom: "Bœuf, steak haché 10% MG, cuit", ef: "4.34" },
        { nom: "Bœuf, steak haché 15% MG, cru", ef: "3.42" },
        { nom: "Bœuf, steak haché 15% MG, cuit", ef: "4.34" },
        { nom: "Bœuf, steak haché 20% MG, cru", ef: "3.42" },
        { nom: "Bœuf, steak haché 20% MG, cuit", ef: "4.34" },
        {
          nom:
            "Haché à base de bœuf ou Préparation de viande hachée de boeuf, 15% MG, cru",
          ef: "1.72",
        },
        { nom: "Boeuf, paleron, cru", ef: "3.46" },
        { nom: "Boeuf, paleron, braisé ou bouilli", ef: "4.40" },
        { nom: "Boeuf, queue, bouillie/cuite à l'eau", ef: "3.54" },
        { nom: "Veau, côte, crue", ef: "1.80" },
        { nom: "Veau, côte, grillée/poêlée", ef: "2.28" },
        { nom: "Veau, carré, sauté/poêlé", ef: "1.82" },
        { nom: "Veau, carré, cru", ef: "1.43" },
        { nom: "Veau, escalope, cuite", ef: "2.28" },
        { nom: "Veau, escalope, crue", ef: "1.78" },
        { nom: "Veau, noix, crue", ef: "1.78" },
        { nom: "Veau, noix, grillée/poêlée", ef: "2.26" },
        { nom: "Veau, noix, rôtie", ef: "2.28" },
        { nom: "Veau, filet, cru", ef: "1.78" },
        { nom: "Veau, filet, rôti/cuit au four", ef: "2.28" },
        { nom: "Veau, steak haché 20% MG, cru", ef: "2.21" },
        { nom: "Veau, steak haché 15% MG, cru", ef: "2.21" },
        { nom: "Veau, poitrine, crue", ef: "1.43" },
        { nom: "Veau, rôti, cru", ef: "2.23" },
        { nom: "Veau, rôti, cuit", ef: "2.85" },
        { nom: "Veau, épaule, crue", ef: "1.43" },
        { nom: "Veau, épaule, grillée/poêlée", ef: "1.82" },
        { nom: "Veau, épaule, braisée ou bouillie", ef: "1.83" },
        { nom: "Veau, pied, cru", ef: "1.80" },
        { nom: "Veau, jarret, braisé ou bouilli", ef: "2.29" },
        { nom: "Veau, tête, bouillie/cuite à l'eau", ef: "2.29" },
        { nom: "Veau, jarret, cru", ef: "1.80" },
        { nom: "Veau, collier, cru", ef: "1.80" },
        { nom: "Veau, collier, braisé ou bouilli", ef: "2.29" },
        { nom: "Pain, baguette, courante", ef: "0.13" },
        { nom: "Pain, baguette ou boule, au levain", ef: "0.12" },
        { nom: "Pain grillé, domestique", ef: "0.13" },
        { nom: "Pain, baguette, de tradition française", ef: "0.13" },
        {
          nom: "Pain, baguette ou boule, bis (à la farine T80 ou T110) ",
          ef: "0.13",
        },
        { nom: "Pain courant français, 400g ou boule", ef: "0.13" },
        {
          nom: "Pain, baguette ou boule, bio (à la farine T55 jusqu'à T110)",
          ef: "0.13",
        },
        { nom: "Pain, baguette ou boule, de campagne", ef: "0.12" },
        { nom: "Pain complet ou intégral (à la farine T150)", ef: "0.12" },
        { nom: "Pain de mie, complet", ef: "0.22" },
        { nom: "Pain de mie, au son", ef: "0.22" },
        { nom: "Pain de mie, multicéréale", ef: "0.19" },
        { nom: "Pain au son", ef: "0.11" },
        { nom: "Pain de seigle, et froment", ef: "0.15" },
        { nom: "Pain, sans gluten", ef: "0.21" },
        { nom: "Pain, baguette, sans sel", ef: "0.13" },
        { nom: "Pain panini", ef: "0.16" },
        { nom: "Pain pita", ef: "0.14" },
        { nom: "Pain de mie, courant", ef: "0.22" },
        { nom: "Pain de mie, sans croûte, préemballé", ef: "0.16" },
        { nom: "Pain de mie brioché, préemballé", ef: "0.25" },
        { nom: "Pain brioché ou viennois", ef: "0.26" },
        {
          nom: "Pain, baguette ou boule, aux céréales et graines, artisanal",
          ef: "0.22",
        },
        {
          nom: "Muffin anglais, complet, petit pain spécial, préemballé",
          ef: "0.11",
        },
        { nom: "Muffin anglais, petit pain spécial, préemballé", ef: "0.26" },
        { nom: "Bagel", ef: "0.15" },
        { nom: "Pain pour hamburger ou hot dog (bun), préemballé", ef: "0.27" },
        {
          nom: "Pain blanc maison (avec farine pour machine à pain)",
          ef: "0.13",
        },
        {
          nom: "Pain de campagne maison (avec farine pour machine à pain)",
          ef: "0.12",
        },
        {
          nom: "Pain pour hamburger ou hot dog (bun), complet, préemballé",
          ef: "0.12",
        },
        { nom: "Biscotte classique", ef: "0.14" },
        { nom: "Biscotte briochée", ef: "0.14" },
        { nom: "Biscotte sans adjonction de sel", ef: "0.14" },
        { nom: "Biscotte multicéréale", ef: "0.14" },
        { nom: "Biscotte complète ou riche en fibres", ef: "0.14" },
        { nom: "Galette de riz soufflé complet", ef: "0.17" },
        { nom: "Galettes multicéréales soufflées", ef: "0.17" },
        { nom: "Pain grillé, tranches, au froment", ef: "0.12" },
        { nom: "Pain grillé brioché, tranché, préemballé", ef: "0.24" },
        { nom: "Pain grillé suédois au froment", ef: "0.18" },
        { nom: "Pain grillé suédois aux graines de lin", ef: "0.18" },
        { nom: "Tartine craquante, extrudée et grillée", ef: "0.19" },
        {
          nom: "Tartine craquante, extrudée et grillée, fourrée au chocolat",
          ef: "0.20",
        },
        {
          nom: "Tartine craquante, extrudée et grillée, fourrée aux fruits",
          ef: "0.20",
        },
        { nom: "Pain grillé suédois au blé complet", ef: "0.18" },
        { nom: "Pain grillé suédois aux fruits", ef: "0.18" },
        { nom: "Pain grillé, tranches, multicéréale", ef: "0.11" },
        { nom: "Croûtons", ef: "0.86" },
        { nom: "Croûtons nature, préemballés", ef: "0.86" },
        { nom: "Gressins", ef: "0.16" },
        { nom: "Croissant, sans précision", ef: "0.23" },
        { nom: "Croissant ordinaire, artisanal", ef: "0.23" },
        { nom: "Croissant au beurre, artisanal", ef: "0.36" },
        { nom: "Croissant aux amandes, artisanal", ef: "0.55" },
        { nom: "Pain au lait, artisanal", ef: "0.35" },
        { nom: "Pain au lait, préemballé", ef: "0.35" },
        { nom: "Pain au lait aux pépites de chocolat, préemballé", ef: "0.36" },
        { nom: "Pain aux raisins (viennoiserie)", ef: "0.39" },
        { nom: "Pain au chocolat feuilleté, artisanal", ef: "0.54" },
        { nom: "Pain au chocolat, préemballé", ef: "0.54" },
        { nom: "Brioche aux pépites de chocolat", ef: "0.40" },
        { nom: "Brioche fourrée au chocolat", ef: "0.58" },
        { nom: "Brioche fourrée aux fruits", ef: "0.58" },
        {
          nom: 'Brioche fourrée crème pâtissière (type "chinois"), préemballée',
          ef: "0.38",
        },
        { nom: "Brioche, préemballée", ef: "0.48" },
        { nom: "Brioche, sans précision", ef: "0.48" },
        { nom: "Brioche, de boulangerie traditionnelle", ef: "0.48" },
        {
          nom: "Couronne de Noël (Brioche) aux fruits confits, préemballée",
          ef: "0.47",
        },
        { nom: "Brioche pur beurre", ef: "0.48" },
        { nom: "Focaccia, garnie", ef: "0.43" },
        { nom: "Fougasse, garnie", ef: "0.19" },
        { nom: "Tortilla souple (à garnir), à base de maïs", ef: "0.17" },
        {
          nom:
            "Cake salé (garniture : fromage, légumes, viande, poisson, volaille, etc.)",
          ef: "0.58",
        },
        { nom: "Tortilla souple (à garnir), à base de blé", ef: "0.17" },
        { nom: "Rillettes traditionnelles de porc", ef: "0.77" },
        { nom: "Rillettes pur porc", ef: "0.77" },
        { nom: "Rillettes de Tours", ef: "0.77" },
        { nom: "Rillettes du Mans", ef: "0.77" },
        { nom: "Rillettes pur oie", ef: "0.77" },
        { nom: "Rillettes de canard", ef: "0.77" },
        { nom: "Rillettes d'oie", ef: "0.77" },
        { nom: "Rillettes de poulet", ef: "0.77" },
        { nom: "Rillettes de poisson", ef: "0.54" },
        { nom: "Rillettes de saumon", ef: "1.27" },
        { nom: "Rillettes de thon", ef: "0.54" },
        { nom: "Rillettes de maquereau", ef: "1.27" },
        {
          nom: "Confit de canard, viande (cuisse), sans peau, réchauffé",
          ef: "1.18",
        },
        { nom: "Confit de canard", ef: "1.18" },
        { nom: "Canard, magret fumé", ef: "1.16" },
        { nom: "Confit de foie de porc", ef: "0.27" },
        { nom: "Confit de foie de volaille", ef: "0.21" },
        { nom: "Pâté au poivre vert", ef: "0.77" },
        { nom: "Pâté ou terrine de campagne", ef: "0.77" },
        { nom: "Pâté breton", ef: "0.77" },
        { nom: "Terrine de canard", ef: "0.94" },
        { nom: "Pâté de lapin", ef: "0.80" },
        { nom: "Terrine de lapin", ef: "0.80" },
        { nom: "Pâté de gibier", ef: "0.77" },
        { nom: "Pâté ou terrine aux champignons (forestier)", ef: "0.31" },
        { nom: "Terrine de poisson", ef: "1.36" },
        { nom: "Terrine de fruits de mer, avec ou sans poisson", ef: "1.36" },
        { nom: "Tarama, préemballé", ef: "0.26" },
        { nom: "Terrine ou mousse de légumes", ef: "0.21" },
        { nom: "Flan de légumes", ef: "0.29" },
        { nom: "Pâté de foie de porc, supérieur", ef: "0.77" },
        { nom: "Pâté de foie de porc", ef: "0.77" },
        {
          nom: "Mousse de foie de porc supérieure ou Crème de foie",
          ef: "0.77",
        },
        { nom: "Mousse de foie de porc", ef: "0.77" },
        { nom: "Mousse de canard", ef: "0.85" },
        { nom: "Pâté de foie de volaille", ef: "0.77" },
        { nom: "Pâté de foie d'oie", ef: "0.77" },
        { nom: "Roulade de porc pistachée", ef: "1.51" },
        { nom: "Pâté en croûte", ef: "1.67" },
        { nom: "Jambon en croûte", ef: "1.27" },
        { nom: "Fromage de tête", ef: "0.69" },
        { nom: "Museau de porc vinaigrette", ef: "0.30" },
        { nom: "Andouille", ef: "2.09" },
        { nom: "Andouille de Guéméné", ef: "2.09" },
        { nom: "Andouille, réchauffée à la poêle", ef: "2.09" },
        { nom: "Andouille de Vire", ef: "2.09" },
        { nom: "Andouillette, crue", ef: "2.06" },
        { nom: "Andouillette, sautée/poêlée", ef: "2.09" },
        { nom: "Andouillette de Troyes, crue", ef: "2.06" },
        { nom: "Tripes à la mode de Caen", ef: "2.33" },
        { nom: "Tripes à la mode de Caen, préemballées", ef: "2.33" },
        { nom: "Tripes à la tomate ou à la provençale", ef: "2.08" },
        { nom: "Boudin noir, rayon frais", ef: "0.86" },
        { nom: "Boudin noir, sauté/poêlé", ef: "0.86" },
        { nom: "Boudin blanc truffé, cru", ef: "2.06" },
        { nom: "Quenelle de veau, en sauce", ef: "0.74" },
        { nom: "Quenelle de volaille, crue", ef: "0.83" },
        { nom: "Quenelle de volaille, en sauce", ef: "0.86" },
        { nom: "Quenelle de poisson, en sauce", ef: "0.92" },
        { nom: "Quenelle de poisson, crue", ef: "0.89" },
        { nom: "Quenelle nature, crue", ef: "0.38" },
        { nom: "Épeautre, cru", ef: "0.13" },
        { nom: "Blé de Khorasan, cru", ef: "0.06" },
        { nom: "Blé tendre entier ou froment, cru", ef: "0.10" },
        { nom: "Blé dur entier, cru", ef: "0.13" },
        { nom: "Blé dur précuit, entier, cru", ef: "0.13" },
        { nom: "Blé dur précuit, grains entiers, cuit, non salé", ef: "0.07" },
        { nom: "Blé dur précuit cuisiné, en sachet micro-ondable", ef: "0.06" },
        {
          nom: "Blé dur précuit, grains entiers, cuisiné, à poêler",
          ef: "0.06",
        },
        { nom: "Nouilles asiatiques cuites, aromatisées", ef: "0.21" },
        { nom: "Nouilles asiatiques cuites, nature, non salées", ef: "0.21" },
        { nom: "Riz blanc, cru", ef: "0.31" },
        { nom: "Riz blanc étuvé, cru", ef: "0.31" },
        { nom: "Riz complet, cru", ef: "0.31" },
        { nom: "Riz complet, cuit, non salé", ef: "0.15" },
        { nom: "Riz blanc, cuit, non salé", ef: "0.15" },
        { nom: "Riz blanc étuvé, cuit, non salé", ef: "0.15" },
        { nom: "Riz sauvage, cru", ef: "0.31" },
        { nom: "Riz rouge, cru", ef: "0.31" },
        { nom: "Riz rouge, cuit, non salé", ef: "0.15" },
        { nom: "Riz sauvage, cuit, non salé", ef: "0.15" },
        { nom: "Riz thaï ou basmati, cru", ef: "0.31" },
        {
          nom:
            "Riz, mélange de variétés (blanc, complet, rouge, sauvage, etc.), cru",
          ef: "0.31",
        },
        { nom: "Maïs entier, cru", ef: "0.14" },
        { nom: "Pop-corn ou Maïs éclaté, à l'huile, salé", ef: "0.19" },
        { nom: "Pop-corn ou Maïs éclaté, à l'air, non salé", ef: "0.21" },
        { nom: "Pop-corn ou Maïs éclaté, au caramel", ef: "0.29" },
        { nom: "Avoine, crue", ef: "0.23" },
        { nom: "Flocon d'avoine", ef: "0.28" },
        { nom: "Flocons d'avoine, bouillis/cuits à l'eau", ef: "0.25" },
        { nom: "Orge entière, crue", ef: "0.14" },
        { nom: "Orge perlée, crue", ef: "0.14" },
        { nom: "Orge perlée, bouilli/cuite à l'eau, non salée", ef: "0.13" },
        { nom: "Mil entier, cru", ef: "0.14" },
        { nom: "Mil, cuit, non salé", ef: "0.07" },
        { nom: "Quinoa, cru", ef: "0.35" },
        { nom: "Quinoa, bouilli/cuit à l'eau, non salé", ef: "0.15" },
        { nom: "Amarante, crue", ef: "0.13" },
        { nom: "Sorgho entier, cru", ef: "0.12" },
        { nom: "Sarrasin entier, cru", ef: "0.13" },
        { nom: "Seigle entier, cru", ef: "0.11" },
        { nom: "Farine de blé tendre ou froment T110", ef: "0.09" },
        { nom: "Farine de blé tendre ou froment T150", ef: "0.09" },
        { nom: "Farine de blé tendre ou froment T65", ef: "0.09" },
        { nom: "Farine de blé tendre ou froment T55 (pour pains)", ef: "0.09" },
        {
          nom: "Farine de blé tendre ou froment avec levure incorporée",
          ef: "0.09",
        },
        {
          nom: "Farine de blé tendre ou froment T45 (pour pâtisserie)",
          ef: "0.09",
        },
        { nom: "Farine de blé tendre ou froment T80", ef: "0.09" },
        { nom: "Farine d'épeautre (grand épeautre)", ef: "0.16" },
        { nom: "Amidon de maïs ou fécule de maïs", ef: "0.17" },
        { nom: "Farine de riz", ef: "0.37" },
        { nom: "Farine de seigle T170", ef: "0.13" },
        { nom: "Farine de seigle T85", ef: "0.13" },
        { nom: "Farine de seigle T130", ef: "0.13" },
        { nom: "Farine de sarrasin", ef: "0.16" },
        { nom: "Farine de maïs", ef: "0.17" },
        { nom: "Farine d'orge", ef: "0.17" },
        { nom: "Farine de millet", ef: "0.18" },
        { nom: "Farine de châtaigne", ef: "0.58" },
        { nom: "Farine de pois chiche", ef: "0.15" },
        { nom: "Semoule de blé dur, crue", ef: "0.27" },
        { nom: "Mélange de céréales et légumineuses, cru", ef: "0.12" },
        { nom: "Polenta ou semoule de maïs, précuite, sèche", ef: "0.27" },
        { nom: "Polenta ou semoule de maïs, cuite, non salée", ef: "0.12" },
        { nom: "Son de blé", ef: "0.08" },
        { nom: "Son d'avoine", ef: "0.14" },
        { nom: "Son de maïs", ef: "0.10" },
        { nom: "Son de riz", ef: "0.18" },
        {
          nom:
            "Couscous (semoule de blé dur roulée précuite à la vapeur), crue",
          ef: "0.27",
        },
        {
          nom:
            "Couscous (semoule de blé dur roulée précuite à la vapeur), cuite, non salée",
          ef: "0.12",
        },
        { nom: "Boulgour de blé, cru", ef: "0.13" },
        { nom: "Boulgour de blé, cuit, non salé", ef: "0.06" },
        { nom: "Pâtes sèches standard, crues", ef: "0.32" },
        { nom: "Pâtes sèches standard, cuites, non salées", ef: "0.31" },
        { nom: "Pâtes fraîches, aux œufs, crues", ef: "0.24" },
        { nom: "Pâtes fraîches, aux œufs, cuites, non salées", ef: "0.28" },
        { nom: "Pâtes sèches, aux œufs, crues", ef: "0.31" },
        { nom: "Pâtes sèches, aux œufs, cuites, non salées", ef: "0.27" },
        { nom: "Pâtes sèches, sans gluten, cuites, non salées", ef: "0.31" },
        { nom: "Nouilles asiatiques aromatisées, déshydratées", ef: "4.17" },
        { nom: "Pâtes sèches, au blé complet, crues", ef: "0.31" },
        { nom: "Pâtes sèches, au blé complet, cuites, non salées", ef: "0.31" },
        { nom: "Pâtes sèches, sans gluten, crues", ef: "0.31" },
        { nom: "Vermicelle de riz, sèche", ef: "0.68" },
        { nom: "Vermicelle de riz, cuite, non salée", ef: "0.18" },
        { nom: "Calmar ou calamar ou encornet, cru", ef: "1.96" },
        {
          nom: "Calmar ou Calamar ou encornet, à la romaine (beignet)",
          ef: "0.88",
        },
        { nom: "Coquille Saint-Jacques, noix et corail, crue", ef: "1.58" },
        { nom: "Coquille Saint-Jacques, noix et corail, cuite", ef: "0.28" },
        { nom: "Crevette, cuite", ef: "0.80" },
        { nom: "Huître, sans précision, crue", ef: "0.47" },
        { nom: "Moule, bouillie/cuite à l'eau", ef: "0.64" },
        { nom: "Moule commune, crue", ef: "0.46" },
        { nom: "Crevette, crue", ef: "0.80" },
        { nom: "Beignet de crevette", ef: "0.39" },
        { nom: "Langoustine, crue", ef: "1.59" },
        { nom: "Moule de Méditerranée, crue", ef: "0.46" },
        { nom: "Moule, appertisée, égouttée", ef: "0.63" },
        { nom: "Huître creuse, crue", ef: "0.47" },
        { nom: "Huître plate, crue", ef: "0.47" },
        {
          nom: "Calmar ou calamar ou encornet, bouilli/cuit à l'eau",
          ef: "1.09",
        },
        { nom: "Crevette, surgelée, crue", ef: "1.17" },
        { nom: "Escargot en sauce au beurre persillé, cuit", ef: "0.38" },
        { nom: "Coquille Saint-Jacques, noix, crue", ef: "1.58" },
        {
          nom: "Pecten d'Amérique ou Peigne du canada, noix, crue",
          ef: "1.60",
        },
        { nom: "Pétoncle ou Peigne du Pérou, noix, crue", ef: "1.60" },
        { nom: "Crevette rose, crue", ef: "1.13" },
        {
          nom:
            "Moules à la sauce catalane ou escabèche (tomate), appertisée, égouttée",
          ef: "0.49",
        },
        { nom: "Moules marinières (oignons et vin blanc)", ef: "0.37" },
        {
          nom: "Moules farcies (matière grasse, persillade…), crues",
          ef: "0.37",
        },
        {
          nom:
            "Calmar ou calamar ou encornet, frit ou poêlé avec matière grasse",
          ef: "1.08",
        },
        { nom: "Ail, cru", ef: "0.07" },
        { nom: "Cerfeuil, frais", ef: "0.14" },
        { nom: "Ciboule ou Ciboulette, fraîche", ef: "0.10" },
        { nom: "Curry, poudre", ef: "0.26" },
        { nom: "Gingembre, poudre", ef: "0.16" },
        { nom: "Gélatine, sèche", ef: "0.25" },
        { nom: "Ketchup", ef: "0.15" },
        { nom: "Levure alimentaire", ef: "0.43" },
        { nom: "Levure de boulanger, compressée", ef: "0.42" },
        { nom: "Moutarde", ef: "0.31" },
        { nom: "Persil, frais", ef: "0.14" },
        { nom: "Poivre noir, poudre", ef: "0.15" },
        { nom: "Raifort, cru", ef: "0.09" },
        {
          nom:
            "Sel blanc alimentaire, non iodé, non fluoré (marin, ignigène ou gemme)",
          ef: "0.08",
        },
        { nom: "Vinaigre", ef: "0.18" },
        { nom: "Poivre blanc, poudre", ef: "0.15" },
        { nom: "Poivre gris, poudre", ef: "0.15" },
        { nom: "Moutarde à l'ancienne", ef: "0.33" },
        { nom: "Ail séché, poudre", ef: "0.13" },
        { nom: "Persil, séché", ef: "0.17" },
        { nom: "Cannelle, poudre", ef: "0.29" },
        { nom: "Coriandre, graine", ef: "0.15" },
        { nom: "Menthe, fraîche", ef: "0.14" },
        { nom: "Basilic, séché", ef: "0.17" },
        { nom: "Basilic, frais", ef: "0.14" },
        { nom: "Marjolaine, séchée", ef: "0.17" },
        { nom: "Origan, séché", ef: "0.17" },
        { nom: "Romarin, séché", ef: "0.17" },
        { nom: "Sauge, séchée", ef: "0.17" },
        { nom: "Thym, séché", ef: "0.17" },
        { nom: "Safran", ef: "0.26" },
        { nom: "Cumin, graine", ef: "0.26" },
        { nom: "Tapenade", ef: "0.34" },
        { nom: "Sel au céleri", ef: "0.08" },
        { nom: "Levure de boulanger, déshydratée", ef: "0.43" },
        { nom: "Levure chimique ou Poudre à lever", ef: "0.43" },
        { nom: "Noix de muscade", ef: "0.17" },
        { nom: "Paprika", ef: "0.15" },
        { nom: "Sauce tartare, préemballée", ef: "0.30" },
        { nom: "Clou de girofle", ef: "0.28" },
        { nom: "Laurier, feuille", ef: "0.15" },
        { nom: "Mayonnaise (70% MG min.)", ef: "0.57" },
        { nom: "Quatre épices", ef: "0.23" },
        {
          nom:
            "Sel blanc alimentaire, iodé, non fluoré (marin, ignigène ou gemme)",
          ef: "0.08",
        },
        { nom: "Herbes de Provence, séchées", ef: "0.17" },
        { nom: "Pavot, graine", ef: "0.46" },
        { nom: "Sarriette, séchée", ef: "0.17" },
        { nom: "Carvi, graine", ef: "0.26" },
        { nom: "Vanille, extrait alcoolique", ef: "0.25" },
        { nom: "Fenouil, graine", ef: "0.15" },
        { nom: "Romarin, frais", ef: "0.14" },
        { nom: "Sauge, fraîche", ef: "0.14" },
        { nom: "Thym, frais", ef: "0.14" },
        { nom: "Gingembre, racine crue", ef: "0.10" },
        { nom: "Cardamome, poudre", ef: "0.26" },
        { nom: "Fenugrec, graine", ef: "0.26" },
        {
          nom:
            "Mayonnaise à teneur réduite en matière grasse ou Mayonnaise allégée",
          ef: "0.57",
        },
        { nom: "Fleur de sel, non iodée, non fluorée", ef: "0.08" },
        { nom: "Sel marin gris, non iodé, non fluoré", ef: "0.08" },
        { nom: "Agar (algue), cru", ef: "1.25" },
        { nom: "Spiruline (Spirulina sp.), séchée ou déshydratée", ef: "1.25" },
        { nom: "Poivre de Cayenne ou piment de Cayenne", ef: "0.15" },
        { nom: "Curcuma, poudre", ef: "0.26" },
        { nom: "Vinaigre de cidre", ef: "0.12" },
        { nom: "Vinaigre balsamique", ef: "0.18" },
        { nom: "Estragon, frais", ef: "0.14" },
        { nom: "Aneth, frais", ef: "0.14" },
        { nom: "Coriandre, fraiche", ef: "0.14" },
        { nom: "Vanille, extrait aqueux", ef: "0.24" },
        { nom: "Sauce barbecue, préemballée", ef: "0.18" },
        { nom: "Sauce béchamel, préemballée", ef: "0.27" },
        { nom: "Sauce béarnaise, préemballée", ef: "0.77" },
        { nom: "Sauce soja, préemballée", ef: "0.11" },
        { nom: "Sauce hollandaise, préemballée", ef: "0.94" },
        { nom: "Sauce tomate aux oignons, préemballée", ef: "0.18" },
        {
          nom: "Sauce vinaigrette (50 à 75% d'huile), préemballée",
          ef: "0.50",
        },
        { nom: "Sauce armoricaine, préemballée", ef: "0.49" },
        { nom: "Harissa (sauce condimentaire)", ef: "0.46" },
        {
          nom: "Sauce tomate à la viande ou Sauce bolognaise, préemballée",
          ef: "1.28",
        },
        { nom: "Sauce au poivre vert, préemballée", ef: "0.19" },
        { nom: "Sauce bourguignonne, préemballée", ef: "0.36" },
        { nom: "Sauce madère, préemballée", ef: "0.55" },
        { nom: "Sauce à l'échalote à la crème, préemballée", ef: "0.38" },
        { nom: "Sauce carbonara, préemballée", ef: "0.68" },
        { nom: "Sauce chasseur, préemballée", ef: "0.23" },
        { nom: "Sauce au curry, préemballée", ef: "0.12" },
        { nom: "Sauce au beurre blanc, préemballée", ef: "0.66" },
        { nom: "Sauce béchamel, maison", ef: "0.27" },
        { nom: "Sauce moutarde, préemballée", ef: "0.38" },
        { nom: "Sauce au beurre, préemballée", ef: "0.66" },
        { nom: "Sauce à la crème", ef: "0.42" },
        { nom: "Sauce aux champignons, préemballée", ef: "0.21" },
        { nom: "Sauce à la crème aux épices", ef: "0.40" },
        { nom: "Sauce à la crème aux herbes", ef: "0.40" },
        { nom: "Sauce aigre douce, préemballée", ef: "0.18" },
        { nom: "Sauce au vin rouge", ef: "0.27" },
        { nom: "Sauce au yaourt", ef: "0.22" },
        { nom: "Sauce américaine, préemballée", ef: "0.49" },
        { nom: "Sauce aïoli, préemballée", ef: "0.59" },
        {
          nom: "Sauce basquaise ou Sauce aux poivrons, préemballée",
          ef: "0.24",
        },
        { nom: "Court-bouillon pour poissons, déshydraté", ef: "2.20" },
        { nom: "Sauce tomate aux champignons, préemballée", ef: "0.18" },
        { nom: "Sauce tomate aux olives, préemballée", ef: "0.18" },
        { nom: "Sauce pesto, préemballée", ef: "0.47" },
        { nom: "Sauce au poivre, chaude, préemballée", ef: "0.30" },
        { nom: "Sauce crudités ou Sauce salade, préemballée", ef: "0.57" },
        {
          nom: "Sauce au fromage pour risotto ou pâtes, préemballée",
          ef: "0.40",
        },
        { nom: "Sauce au roquefort, préemballée", ef: "0.66" },
        { nom: "Sauce aux champignons et à la crème, préemballée", ef: "0.35" },
        { nom: "Sauce Nuoc Mâm ou Sauce au poisson, préemballée", ef: "0.15" },
        { nom: "Sauce burger, préemballée", ef: "0.57" },
        {
          nom:
            "Sauce crudités ou Sauce salade, allégée en matière grasse, préemballée",
          ef: "0.57",
        },
        { nom: "Sauce grand veneur, préemballée", ef: "0.36" },
        {
          nom: "Sauce indienne type tandoori ou tikka masala, préemballée",
          ef: "0.23",
        },
        { nom: "Sauce kebab, préemballée", ef: "0.37" },
        { nom: "Sauce rouille, préemballée", ef: "0.51" },
        { nom: "Sauce tomate aux petits légumes, préemballée", ef: "0.21" },
        { nom: "Sauce tomate au fromage, préemballée", ef: "0.21" },
        { nom: "Sauce pesto rosso, préemballée", ef: "0.47" },
        {
          nom: "Sauce au poivre, condimentaire, froide, préemballée",
          ef: "0.30",
        },
        {
          nom: 'Préparation culinaire à base de soja, type "crème de soja"',
          ef: "0.19",
        },
        { nom: "Sauce au chocolat", ef: "0.56" },
        { nom: "Bicarbonate de soude", ef: "0.23" },
        { nom: "Camembert, sans précision", ef: "0.50" },
        {
          nom: "Fromage à pâte molle et croûte fleurie (type camembert)",
          ef: "0.50",
        },
        { nom: "Camembert au lait cru", ef: "0.50" },
        { nom: "Fromage à pâte molle double crème environ 30% MG", ef: "0.50" },
        {
          nom:
            "Fromage rond à pâte molle et croûte fleurie 5 à 11% MG type camembert allégé en matière grasse",
          ef: "0.50",
        },
        { nom: "Coulommiers", ef: "0.50" },
        {
          nom:
            "Fromage rond à pâte molle et croûte fleurie environ 11% MG type coulommiers allégé en matière grasse",
          ef: "0.50",
        },
        {
          nom:
            "Fromage rond à pâte molle et croûte fleurie environ 5% MG type camembert allégé en matière grasse",
          ef: "0.50",
        },
        { nom: "Brie, sans précision", ef: "0.50" },
        { nom: "Brie de Meaux", ef: "0.50" },
        { nom: "Brie de Melun", ef: "0.50" },
        { nom: "Carré de l'Est", ef: "0.50" },
        { nom: "Chaource", ef: "0.50" },
        { nom: "Maroilles laitier", ef: "0.50" },
        { nom: "Maroilles fermier", ef: "0.50" },
        { nom: "Neufchâtel", ef: "0.50" },
        { nom: "Fromage à pâte molle triple crème environ 40% MG", ef: "0.50" },
        {
          nom: "Fromage à pâte molle et croûte lavée, allégé environ 13% MG",
          ef: "0.50",
        },
        { nom: "Maroilles, sans précision", ef: "0.50" },
        { nom: "Livarot", ef: "0.50" },
        { nom: "Époisses", ef: "0.50" },
        { nom: "Munster", ef: "0.50" },
        { nom: "Langres", ef: "0.50" },
        { nom: "Pont l'Évêque", ef: "0.50" },
        { nom: "Reblochon", ef: "0.50" },
        {
          nom:
            "Fromage à pâte molle à croûte lavée, au lait pasteurisé (type Vieux Pané)",
          ef: "0.50",
        },
        { nom: "Saint-Marcellin", ef: "0.50" },
        {
          nom:
            "Fromage à pâte molle et croûte mixte (lavée et fleurie) colorée",
          ef: "0.50",
        },
        {
          nom:
            "Mont d'or ou Vacherin du Haut-Doubs (produit en France) ou Vacherin-Mont d'Or (produit en Suisse)",
          ef: "0.50",
        },
        { nom: "Saint-Félicien", ef: "0.50" },
        { nom: "Fromage type feta, au lait de vache", ef: "0.50" },
        { nom: "Feta de brebis", ef: "0.65" },
        {
          nom: "Fromage type feta, au lait de vache, à l'huile et aux aromates",
          ef: "0.50",
        },
        { nom: "Beaufort", ef: "0.57" },
        { nom: "Comté", ef: "0.57" },
        { nom: "Gruyère IGP France", ef: "0.57" },
        { nom: "Gruyère", ef: "0.57" },
        { nom: "Emmental ou emmenthal", ef: "0.57" },
        {
          nom:
            "Fromage à pate pressée cuite type emmental ou emmenthal, allégé en matière grasse",
          ef: "0.57",
        },
        { nom: "Emmental ou emmenthal râpé", ef: "0.57" },
        { nom: "Ossau-Iraty", ef: "0.90" },
        { nom: "Parmesan", ef: "0.57" },
        { nom: "Fontina", ef: "0.50" },
        { nom: "Grana Padano", ef: "0.57" },
        { nom: "Fromage fondu en tranchettes", ef: "0.50" },
        {
          nom: "Fromage fondu en portions ou en cubes environ 20% MG",
          ef: "0.50",
        },
        {
          nom:
            "Spécialité fromagère non affinée environ 25% MG, type fromage en barquette à tartiner ou coque fromagère",
          ef: "0.50",
        },
        { nom: "Fromage fondu double crème, environ 31% MG", ef: "0.50" },
        {
          nom:
            "Spécialité fromagère non affinée environ 20% MG, type fromage en barquette à tartiner ou coque fromagère",
          ef: "0.50",
        },
        {
          nom: "Spécialité fromagère fondante au fromage blanc et aux noix",
          ef: "0.57",
        },
        {
          nom: "Snack pour enfants à base de fromage fondu et de gressins",
          ef: "0.53",
        },
        { nom: "Roquefort", ef: "0.65" },
        { nom: "Fourme de Montbrison", ef: "0.50" },
        { nom: "Fromage bleu au lait de vache", ef: "0.50" },
        { nom: "Fromage bleu d'Auvergne", ef: "0.50" },
        { nom: "Fourme d'Ambert", ef: "0.50" },
        { nom: "Fromage bleu des Causses", ef: "0.50" },
        { nom: "Gorgonzola", ef: "0.49" },
        {
          nom:
            "Bleu de Gex ou Fromage bleu du Haut-jura ou Bleu de septmoncel (AOC)",
          ef: "0.50",
        },
        { nom: "Fromage bleu de Bresse", ef: "0.50" },
        { nom: "Fromage bleu de Bresse allegé environ 15% MG", ef: "0.50" },
        {
          nom:
            "Fromage à pâte ferme environ 14% MG type Masdaam à teneur réduite en MG",
          ef: "0.57",
        },
        { nom: "Provolone", ef: "0.57" },
        { nom: "Cantal entre-deux", ef: "0.57" },
        { nom: "Cantal, Salers ou Laguiole", ef: "0.57" },
        { nom: "Salers", ef: "0.57" },
        { nom: "Cheddar", ef: "0.57" },
        { nom: "Edam", ef: "0.57" },
        { nom: "Mimolette jeune", ef: "0.57" },
        { nom: "Gouda", ef: "0.57" },
        { nom: "Mimolette demi-vieille", ef: "0.57" },
        { nom: "Mimolette vieille", ef: "0.57" },
        { nom: "Mimolette, sans précision", ef: "0.57" },
        { nom: "Fromage à pâte ferme environ 27% MG type Maasdam", ef: "0.57" },
        { nom: "Mimolette extra-vieille", ef: "0.57" },
        { nom: "Morbier", ef: "0.57" },
        { nom: "Fromage de brebis des Pyrénées", ef: "0.90" },
        { nom: "Saint-Nectaire, laitier", ef: "0.57" },
        { nom: "Raclette (fromage)", ef: "0.57" },
        { nom: "Saint-Nectaire, fermier", ef: "0.57" },
        { nom: "Saint-Nectaire, sans précision", ef: "0.57" },
        {
          nom: "Saint-Paulin (fromage à pâte pressée non cuite demi-ferme)",
          ef: "0.57",
        },
        { nom: "Tomme ou tome de vache", ef: "0.50" },
        { nom: "Tomme ou tome de montagne ou de Savoie", ef: "0.50" },
        {
          nom: "Tomme ou tome, allégée en matière grasse, environ 13% MG",
          ef: "0.50",
        },
        { nom: "Asiago", ef: "0.57" },
        { nom: "Fromage de brebis Corse à pâte molle", ef: "0.65" },
        { nom: "Tome des Bauges", ef: "0.50" },
        {
          nom:
            "Fromage de chèvre frais, au lait pasteurisé (type bûchette fraîche)",
          ef: "0.95",
        },
        {
          nom:
            "Fromage de chèvre lactique affiné, au lait cru (type Crottin de Chavignol, Picodon, Rocamadour, Sainte-Maure de Touraine)",
          ef: "0.95",
        },
        {
          nom:
            "Fromage de chèvre lactique affiné, au lait pasteurisé (type bûchette ou crottin)",
          ef: "0.95",
        },
        {
          nom:
            "Fromage de chèvre lactique affiné (type bûchette, crottin, Sainte-Maure)",
          ef: "0.95",
        },
        {
          nom:
            "Fromage de chèvre frais, au lait cru (type palet ou crottin frais)",
          ef: "0.95",
        },
        {
          nom:
            "Fromage de chèvre frais, au lait pasteurisé ou cru (type crottin frais ou bûchette fraîche)",
          ef: "0.95",
        },
        { nom: "Sainte-Maure de Touraine (fromage de chèvre)", ef: "0.95" },
        { nom: "Fromage de chèvre demi-sec", ef: "1.24" },
        { nom: "Fromage de chèvre bûche", ef: "0.95" },
        {
          nom: "Fromage de chèvre bûche, allégé en matière grasse",
          ef: "0.95",
        },
        {
          nom:
            "Fromage de chèvre à pâte molle non pressée non cuite croûte naturelle, au lait pasteurisé",
          ef: "0.95",
        },
        { nom: "Fromage de chèvre sec", ef: "1.24" },
        {
          nom:
            "Fromage de chèvre à pâte molle et croûte fleurie type camembert",
          ef: "0.95",
        },
        { nom: "Fromage de brebis à pâte molle et croûte fleurie", ef: "0.65" },
        { nom: "Fromage de brebis à pâte pressée", ef: "0.90" },
        { nom: "Chabichou (fromage de chèvre)", ef: "0.95" },
        { nom: "Pélardon (fromage de chèvre)", ef: "0.95" },
        { nom: "Crottin de chèvre, au lait cru", ef: "0.95" },
        { nom: "Crottin de chèvre, sans précision", ef: "0.95" },
        { nom: "Crottin de Chavignol (fromage de chèvre)", ef: "0.95" },
        { nom: "Picodon (fromage de chèvre)", ef: "0.95" },
        { nom: "Pouligny Saint-Pierre (fromage de chèvre)", ef: "0.95" },
        { nom: "Sainte-Maure (fromage de chèvre)", ef: "0.95" },
        { nom: "Selles-sur-Cher (fromage de chèvre)", ef: "0.95" },
        { nom: "Chevrot (fromage de chèvre)", ef: "0.95" },
        { nom: "Rocamadour (fromage de chèvre)", ef: "0.95" },
        { nom: "Valençay (fromage de chèvre)", ef: "0.95" },
        { nom: "Abricot, dénoyauté, cru", ef: "0.12" },
        { nom: "Abricot, dénoyauté, sec", ef: "0.80" },
        { nom: "Ananas, pulpe, cru", ef: "0.13" },
        { nom: "Avocat, pulpe, cru", ef: "0.55" },
        { nom: "Banane, pulpe, crue", ef: "0.26" },
        { nom: "Cassis, cru", ef: "0.27" },
        { nom: "Cerise, dénoyautée, crue", ef: "0.43" },
        { nom: "Citron, pulpe, cru", ef: "0.21" },
        { nom: "Coing, cru", ef: "0.08" },
        { nom: "Datte, pulpe et peau, sèche", ef: "0.45" },
        { nom: "Figue, crue", ef: "0.23" },
        { nom: "Figue, sèche", ef: "0.79" },
        { nom: "Fraise de saison, crue", ef: "0.42" },
        { nom: "Framboise, crue", ef: "0.42" },
        {
          nom: "Fruit de la passion ou maracudja, pulpe et pépins, cru",
          ef: "0.12",
        },
        { nom: "Grenade, pulpe et pépins, crue", ef: "0.07" },
        { nom: "Groseille, crue", ef: "0.27" },
        { nom: "Groseille à maquereau, crue", ef: "0.37" },
        { nom: "Kiwi, pulpe et graines, cru", ef: "0.13" },
        { nom: "Litchi, pulpe, cru", ef: "0.22" },
        { nom: "Mangue importée par avion, pulpe, crue", ef: "0.24" },
        {
          nom: "Melon cantaloup (par ex.: Charentais, de Cavaillon) pulpe, cru",
          ef: "0.16",
        },
        { nom: "Myrtille, crue", ef: "0.22" },
        { nom: "Mûre (de ronce), crue", ef: "0.70" },
        { nom: "Nectarine ou brugnon, pulpe et peau, crue", ef: "0.22" },
        { nom: "Orange, pulpe, crue", ef: "0.20" },
        { nom: "Papaye, pulpe, crue", ef: "0.11" },
        { nom: "Pastèque, pulpe, crue", ef: "0.12" },
        { nom: "Poire, pulpe et peau, crue", ef: "0.09" },
        { nom: "Compote de pomme", ef: "0.12" },
        { nom: "Pomme, pulpe et peau, crue", ef: "0.06" },
        { nom: "Pomelo (dit Pamplemousse), pulpe, cru", ef: "0.12" },
        { nom: "Prune Reine-Claude, crue", ef: "0.40" },
        { nom: "Pruneau, sec", ef: "1.28" },
        { nom: "Pêche, pulpe et peau, crue", ef: "0.38" },
        {
          nom: "Raisin blanc, à gros grain (type Italia ou Dattier), cru",
          ef: "0.11",
        },
        { nom: "Raisin noir, cru", ef: "0.11" },
        { nom: "Raisin, sec", ef: "0.65" },
        { nom: "Rhubarbe, tige, crue", ef: "0.08" },
        { nom: "Rhubarbe, tige, cuite, sucrée", ef: "0.15" },
        { nom: "Pomme, pulpe, crue", ef: "0.06" },
        { nom: "Carambole, pulpe, crue", ef: "0.22" },
        { nom: "Figue de Barbarie, pulpe et graines, crue", ef: "0.09" },
        { nom: "Kaki, pulpe, cru", ef: "0.12" },
        { nom: "Citron vert ou Lime, pulpe, cru", ef: "0.15" },
        { nom: "Mûre noire (du mûrier), crue", ef: "0.86" },
        { nom: "Tamarin, fruit immature, pulpe, cru", ef: "0.13" },
        { nom: "Clémentine, pulpe, crue", ef: "0.21" },
        { nom: "Goyave, pulpe, crue", ef: "0.15" },
        { nom: "Pomme Canada, pulpe, crue", ef: "0.06" },
        { nom: "Banane, pulpe, sèche", ef: "1.09" },
        { nom: "Mandarine, pulpe, crue", ef: "0.21" },
        { nom: "Prune, crue", ef: "0.40" },
        { nom: "Poire, pulpe, crue", ef: "0.09" },
        { nom: "Compote, tout type de fruits", ef: "0.12" },
        { nom: "Compote, tout type de fruits, allégée en sucres", ef: "0.11" },
        { nom: "Griotte, crue", ef: "0.40" },
        { nom: "Pomme, sèche", ef: "0.49" },
        { nom: "Raisin, cru", ef: "0.11" },
        { nom: "Canneberge ou cranberry, crue", ef: "0.52" },
        { nom: "Pêche, sèche", ef: "3.60" },
        { nom: "Citron, zeste, cru", ef: "0.21" },
        { nom: "Sureau, baie, crue", ef: "0.86" },
        {
          nom: "Compote, tout type de fruits, allégée en sucres, rayon frais",
          ef: "0.11",
        },
        { nom: "Myrtille, surgelée, crue", ef: "0.28" },
        { nom: "Salade de fruits, crue", ef: "0.27" },
        { nom: "Framboise, surgelée, crue", ef: "0.49" },
        {
          nom: "Olives vertes, fourrées ou farcies (anchois, poivrons, etc.)",
          ef: "0.13",
        },
        { nom: "Mûre (de ronce), surgelée, crue", ef: "0.77" },
        {
          nom:
            "Dessert de fruits, tout type de fruits (en taux de sucres : compotes allégées en sucres < desserts de fruits < compotes allégée)",
          ef: "0.18",
        },
        {
          nom:
            'Purée de fruits, tout type de fruits, type "compote sans sucres ajoutés"',
          ef: "0.12",
        },
        { nom: "Petit pot fruit avec banane pour bébé", ef: "0.11" },
        { nom: "Petit pot fruit sans banane pour bébé", ef: "0.11" },
        { nom: "Boisson aux fruits pour bébé dès 4/6mois", ef: "0.15" },
        {
          nom:
            "Boisson infantile céréales lactées aux légumes pour dîner dès 4/6 mois",
          ef: "0.26",
        },
        {
          nom:
            "Boisson infantile céréales lactées aux fruits pour le goûter dès 4/6 mois",
          ef: "0.25",
        },
        {
          nom:
            "Boisson infantile céréales lactées pour le petit déjeuner dès 4/6 mois",
          ef: "0.26",
        },
        { nom: "Dessert lacté infantile type crème dessert", ef: "0.22" },
        { nom: "Dessert lacté infantile au riz ou à la semoule", ef: "0.22" },
        {
          nom: "Dessert lacté infantile nature sucré ou aux fruits",
          ef: "0.22",
        },
        {
          nom: "Céréales instantanées, poudre à reconstituer, dès 4/6 mois",
          ef: "0.51",
        },
        {
          nom: "Céréales instantanées, poudre à reconstituer, dès 6 mois",
          ef: "0.51",
        },
        {
          nom:
            "Boisson infantile céréales lactées pour le petit déjeuner dès 8/9 mois",
          ef: "0.26",
        },
        {
          nom:
            "Boisson infantile céréales lactées pour le petit déjeuner dès 12 mois",
          ef: "0.26",
        },
        {
          nom: "Boisson infantile céréales lactées pour le petit déjeuner",
          ef: "0.26",
        },
        { nom: "Pomme, pulpe, rôtie/cuite au four", ef: "0.11" },
        { nom: "Pomme, pulpe, bouillie/cuite à l'eau", ef: "0.10" },
        { nom: "Pomelo (dit Pamplemousse) jaune, pulpe, cru", ef: "0.12" },
        { nom: "Pomelo (dit Pamplemousse) rose, pulpe, cru", ef: "0.12" },
        { nom: "Kumquat, sans pépin, cru", ef: "0.15" },
        { nom: "Pamplemousse chinois, pulpe, cru", ef: "0.15" },
        { nom: "Pomme Golden, pulpe et peau, crue", ef: "0.06" },
        {
          nom:
            "Macédoine ou cocktail ou salade de fruits, au sirop, appertisé, égoutté",
          ef: "0.36",
        },
        {
          nom:
            "Macédoine ou cocktail ou salade de fruits, au sirop, appertisé, non égoutté",
          ef: "0.22",
        },
        {
          nom:
            "Macédoine ou cocktail ou salade de fruits, au sirop léger, appertisé, égoutté",
          ef: "0.36",
        },
        {
          nom:
            "Macédoine ou cocktail ou salade de fruits, au sirop léger, appertisé, non égoutté",
          ef: "0.22",
        },
        { nom: "Abricot au sirop léger, appertisé, égoutté", ef: "0.22" },
        { nom: "Abricot au sirop léger, appertisé, non égoutté", ef: "0.13" },
        { nom: "Abricot au sirop, appertisé, égoutté", ef: "0.22" },
        { nom: "Abricot au sirop, appertisé, non égoutté", ef: "0.13" },
        {
          nom: "Ananas au sirop et jus d'ananas, appertisé, égoutté",
          ef: "0.24",
        },
        {
          nom: "Ananas au sirop et jus d'ananas, appertisé, non égoutté",
          ef: "0.14",
        },
        { nom: "Ananas au sirop léger, appertisé, égoutté", ef: "0.24" },
        { nom: "Ananas au sirop léger, appertisé, non égoutté", ef: "0.14" },
        { nom: "Pêche au sirop léger, appertisée, égouttée", ef: "0.48" },
        { nom: "Pêche au sirop léger, appertisée, non égouttée", ef: "0.30" },
        { nom: "Poire au sirop léger, appertisée, non égouttée", ef: "0.13" },
        { nom: "Melon miel ou melon honeydew, pulpe, cru", ef: "0.16" },
        {
          nom: "Fruits rouges, crus (framboises, fraises, groseilles, cassis)",
          ef: "0.42",
        },
        { nom: "Amande (avec peau)", ef: "2.09" },
        { nom: "Cacahuète ou Arachide", ef: "0.63" },
        { nom: "Cacahuète, grillée, salée", ef: "0.63" },
        { nom: "Noisette", ef: "0.62" },
        { nom: "Noix, séchée, cerneaux", ef: "0.86" },
        { nom: "Noix de coco, amande mûre, fraîche", ef: "0.50" },
        { nom: "Noix de coco, amande, sèche", ef: "0.50" },
        { nom: "Noix du Brésil", ef: "0.63" },
        { nom: "Pistache, grillée, salée", ef: "0.74" },
        { nom: "Sésame, graine", ef: "1.06" },
        { nom: "Tournesol, graine", ef: "0.48" },
        { nom: "Crème de marrons", ef: "0.38" },
        { nom: "Noix de coco, amande immature, fraîche", ef: "0.50" },
        { nom: "Crème de marrons vanillée, appertisée", ef: "0.38" },
        {
          nom: "Mélange apéritif de graines salées et raisins secs",
          ef: "0.91",
        },
        { nom: "Noix de cajou, grillée, salée", ef: "1.46" },
        { nom: "Châtaigne, bouillie/cuite à l'eau", ef: "0.51" },
        { nom: "Châtaigne, grillée", ef: "0.47" },
        { nom: "Noix, fraîche", ef: "0.86" },
        { nom: "Châtaigne, crue", ef: "0.45" },
        { nom: "Pignon de pin", ef: "0.63" },
        { nom: "Noix de pécan", ef: "0.81" },
        { nom: "Noix de macadamia", ef: "0.81" },
        { nom: "Cucurbitacées, graine", ef: "0.89" },
        { nom: "Luzerne, graine germée", ef: "0.88" },
        { nom: "Luzerne, graine", ef: "0.88" },
        { nom: "Noisette grillée", ef: "0.64" },
        { nom: "Lin, graine", ef: "0.88" },
        { nom: "Sésame, graine décortiquée", ef: "1.06" },
        { nom: "Cacahuète, grillée", ef: "0.63" },
        { nom: "Sésame, grillé, graine décortiquée", ef: "1.06" },
        { nom: "Châtaigne ou Marron, appertisé", ef: "0.35" },
        { nom: "Amande, mondée, émondée ou blanchie", ef: "2.09" },
        { nom: "Amande, grillée, salée", ef: "2.09" },
        { nom: "Noix de macadamia, grillée, salée", ef: "0.81" },
        { nom: "Pistache, grillée", ef: "0.74" },
        { nom: "Tournesol, graine, grillé, salé", ef: "0.48" },
        { nom: "Noix de pécan, salées", ef: "0.81" },
        { nom: "Chia, graine, séchée", ef: "0.88" },
        {
          nom: "Mélange apéritif de graines (non salées) et fruits séchés",
          ef: "0.91",
        },
        {
          nom: "Mélange apéritif de graines (non salées) et raisins secs",
          ef: "0.91",
        },
        { nom: "Noisette grillée, salée", ef: "0.64" },
        { nom: "Lin, brun, graine", ef: "0.88" },
        { nom: "Pâte d'amande, préemballée", ef: "1.26" },
        { nom: "Beurre de cacahuète ou Pâte d'arachide", ef: "0.45" },
        { nom: "Tahin ou Purée de sésame", ef: "0.59" },
        { nom: "Beurre de cacao", ef: "1.67" },
        {
          nom:
            "Matière grasse ou graisse végétale solide (type margarine) pour friture",
          ef: "0.54",
        },
        { nom: "Huile pour friture, sans précision", ef: "0.48" },
        { nom: "Huile de palme, sans précision", ef: "0.42" },
        { nom: "Huile de palme raffinée", ef: "0.42" },
        { nom: "Beurre à 82% MG, doux", ef: "1.15" },
        { nom: "Huile de beurre ou Beurre concentré", ef: "1.15" },
        { nom: "Beurre à 80% MG, demi-sel", ef: "1.15" },
        { nom: "Beurre à 80% MG, salé", ef: "1.15" },
        { nom: "Beurre à 82% MG, doux, tendre", ef: "1.15" },
        {
          nom: "Beurre à 60-62% MG, à teneur réduite en matière grasse, doux",
          ef: "1.15",
        },
        {
          nom:
            "Beurre à 60-62% MG, à teneur réduite en matière grasse, demi-sel",
          ef: "1.15",
        },
        { nom: "Beurre à 39-41% MG, léger, doux", ef: "1.15" },
        { nom: "Saindoux", ef: "0.20" },
        { nom: "Lard gras, cru", ef: "0.20" },
        { nom: "Graisse de poulet", ef: "0.20" },
        { nom: "Graisse de canard", ef: "0.20" },
        { nom: "Graisse d'oie", ef: "0.20" },
        { nom: "Graisse de dinde", ef: "0.20" },
        {
          nom: "Matière grasse végétale (type margarine) à 80% MG, salé",
          ef: "0.38",
        },
        {
          nom: "Matière grasse végétale ou margarine, 80% MG, doux",
          ef: "0.44",
        },
        {
          nom: "Matière grasse végétale (type margarine) à 70% MG, doux",
          ef: "0.40",
        },
        {
          nom:
            "Matière grasse végétale (type margarine) à 60% de MG, allégée, au tournesol, doux",
          ef: "0.36",
        },
        {
          nom: 'Matière grasse laitière à 25% MG, légère, "à tartiner", doux',
          ef: "1.15",
        },
        {
          nom: 'Matière grasse laitière à 20% MG, légère, "à tartiner", doux',
          ef: "1.15",
        },
        {
          nom:
            "Matière grasse végétale (type margarine), à tartiner, à 30-40% MG, légère, doux",
          ef: "0.25",
        },
        {
          nom:
            "Matière grasse végétale (type margarine), à tartiner, à 30-40% MG, légère, demi-sel",
          ef: "0.23",
        },
        {
          nom:
            "Matière grasse végétale (type margarine), à tartiner, à 30-40% MG, légère, doux, aux esters de stérol végétal",
          ef: "0.23",
        },
        {
          nom:
            "Matière grasse végétale (type margarine), à tartiner, à 30-40% MG, légère, doux, riche en oméga 3",
          ef: "0.25",
        },
        {
          nom:
            "Matière grasse végétale (type margarine) à 50-63% MG, allégée, doux, riche en oméga 3",
          ef: "0.34",
        },
        {
          nom:
            "Matière grasse végétale (type margarine) à 50-63% MG, allégée, demi-sel",
          ef: "0.30",
        },
        {
          nom:
            "Matière grasse végétale (type margarine) à 50-63% MG, allégée, doux, aux esters de stérol végétal",
          ef: "0.35",
        },
        {
          nom:
            "Matière grasse végétale (type margarine) à 50-63% MG, allégée, demi-sel, riche en oméga 3",
          ef: "0.29",
        },
        {
          nom:
            "Matière grasse végétale (type margarine) à 50-63% MG, allégée, doux",
          ef: "0.33",
        },
        {
          nom:
            "Matière grasse végétale (type margarine) à 30-40% MG, légère, demi-sel, aux esters de stérol végétal",
          ef: "0.21",
        },
        {
          nom: "Matière grasse mélangée (végétale et laitière) à 50-63% MG",
          ef: "0.48",
        },
        {
          nom:
            "Matière grasse mélangée (végétale et laitière) à 50-63% MG, demi-sel",
          ef: "0.48",
        },
        {
          nom:
            "Matière grasse mélangée (végétale et laitière), à tartiner, à 30-40% MG",
          ef: "0.48",
        },
        {
          nom:
            "Matière grasse mélangée (végétale et laitière), à tartiner, à 30-40% MG, demi-sel",
          ef: "0.48",
        },
        { nom: "Huile d'arachide", ef: "0.86" },
        { nom: "Huile de colza", ef: "0.48" },
        { nom: "Huile de coton", ef: "0.58" },
        { nom: "Huile de lin", ef: "1.22" },
        { nom: "Huile de maïs", ef: "0.57" },
        { nom: "Huile de noisette", ef: "0.86" },
        { nom: "Huile d'olive vierge extra", ef: "0.60" },
        { nom: "Huile de pépins de raisin", ef: "0.48" },
        { nom: "Huile de sésame", ef: "0.48" },
        { nom: "Huile de soja", ef: "0.39" },
        { nom: "Huile de tournesol", ef: "0.57" },
        { nom: "Huile de foie de morue", ef: "0.17" },
        { nom: "Huile de sardine", ef: "0.17" },
        { nom: "Huile de saumon", ef: "0.17" },
        { nom: "Huile de hareng", ef: "0.17" },
        { nom: "Huile combinée (mélange d'huiles)", ef: "0.55" },
        {
          nom: "Huile combinée, mélange d'huile d'olive et de graines",
          ef: "0.54",
        },
        { nom: "Café, moulu", ef: "2.13" },
        { nom: "Café, non instantané, non sucré, prêt à boire", ef: "0.13" },
        { nom: "Café, poudre soluble", ef: "4.94" },
        { nom: "Limonade, sucrée", ef: "0.08" },
        {
          nom: "Boisson à l'eau minérale ou de source, aromatisée, sucrée",
          ef: "0.04",
        },
        { nom: "Tonic ou bitter, non sucré, avec édulcorants", ef: "0.08" },
        { nom: "Tonic ou bitter, sucré, avec édulcorants", ef: "0.08" },
        {
          nom: "Boisson au thé, aromatisée, sucrée, avec édulcorants",
          ef: "0.09",
        },
        { nom: "Limonade, sucrée, avec édulcorants", ef: "0.08" },
        { nom: "Sirop à diluer, sucré", ef: "0.16" },
        { nom: "Cola, sucré", ef: "0.08" },
        {
          nom: "Boisson gazeuse aux fruits (de 10 à 50% de jus), sucrée",
          ef: "0.05",
        },
        { nom: "Thé infusé, non sucré", ef: "0.01" },
        {
          nom:
            "Boisson plate aux fruits, (à moins de 10% de jus), non sucrée, avec édulcorants",
          ef: "0.04",
        },
        { nom: "Tisane infusée, non sucrée", ef: "0.01" },
        {
          nom: "Boisson plate aux fruits (à moins de 10% de jus), sucrée",
          ef: "0.08",
        },
        { nom: "Boisson gazeuse, sans jus de fruit, sucrée", ef: "0.08" },
        {
          nom:
            "Boisson à l'eau minérale ou de source, aromatisée, non sucrée, sans édulcorant",
          ef: "0.04",
        },
        {
          nom:
            "Boisson à l'eau minérale ou de source, aromatisée, non sucrée, avec édulcorants",
          ef: "0.04",
        },
        {
          nom: "Boisson gazeuse, sans jus de fruit, à teneur réduite en sucres",
          ef: "0.08",
        },
        {
          nom:
            "Boisson gazeuse aux fruits (à moins de 10% de jus), sucrée, avec édulcorants",
          ef: "0.05",
        },
        { nom: "Limonade, non sucrée, avec édulcorants", ef: "0.08" },
        { nom: "Cola, sucré, avec édulcorants", ef: "0.08" },
        { nom: "Diabolo (limonade et sirop)", ef: "0.09" },
        { nom: "Lait de coco ou Crème de coco", ef: "0.07" },
        {
          nom: "Boisson gazeuse aux fruits (à moins de 10% de jus), sucrée",
          ef: "0.05",
        },
        {
          nom:
            "Boisson préparée à partir de sirop à diluer type menthe, fraise, etc, sucré, dilué dans l'eau",
          ef: "0.02",
        },
        { nom: "Cola, non sucré, avec édulcorants", ef: "0.08" },
        {
          nom: "Boisson au thé, aromatisée, non sucrée, avec édulcorants",
          ef: "0.09",
        },
        { nom: "Cola, sucré, sans caféine", ef: "0.08" },
        { nom: "Cola, non sucré, avec édulcorants, sans caféine", ef: "0.08" },
        { nom: "Café, décaféiné, poudre soluble", ef: "5.07" },
        {
          nom: "Café décaféiné, non instantané, non sucré, prêt à boire",
          ef: "0.13",
        },
        {
          nom: "Café expresso, non instantané, non sucré, prêt à boire",
          ef: "0.13",
        },
        {
          nom: "Café décaféiné, instantané, non sucré, prêt à boire",
          ef: "0.30",
        },
        { nom: "Café, instantané, non sucré, prêt à boire", ef: "0.29" },
        { nom: "Boisson au thé, aromatisée, sucrée", ef: "0.09" },
        {
          nom: "Boisson gazeuse, sans jus de fruit, sucrée, avec édulcorants",
          ef: "0.08",
        },
        { nom: "Cacao, non sucré, poudre soluble", ef: "1.66" },
        {
          nom: "Poudre cacaotée ou au chocolat pour boisson, sucrée",
          ef: "1.70",
        },
        {
          nom:
            "Boisson cacaotée ou au chocolat, instantanée, sucrée, prête à boire (reconstituée avec du lait demi-écrémé standard)",
          ef: "0.14",
        },
        {
          nom:
            "Boisson cacaotée ou au chocolat, instantanée, sucrée, enrichie en vitamines, prête à boire (reconstituée avec du lait demi-écrémé standard)",
          ef: "0.14",
        },
        { nom: "Boisson à l'amande", ef: "0.30" },
        { nom: "Chicorée et café, poudre soluble", ef: "2.29" },
        {
          nom:
            "Café au lait, café crème ou cappuccino, instantané ou non, non sucré, prêt à boire",
          ef: "0.07",
        },
        { nom: "Chicorée, poudre soluble", ef: "0.50" },
        {
          nom:
            "Chicorée et café, instantané, non sucré, prête à boire (reconstituée avec du lait demi-écrémé standard)",
          ef: "0.31",
        },
        { nom: "Thé noir, infusé, non sucré", ef: "0.01" },
        { nom: "Thé vert, infusé, non sucré", ef: "0.01" },
        { nom: "Thé oolong, infusé, non sucré", ef: "0.01" },
        { nom: "Café au lait ou cappuccino, poudre soluble", ef: "1.12" },
        {
          nom:
            "Chicorée, instantanée, non sucrée, prête à boire (reconstituée avec du lait demi-écrémé standard)",
          ef: "0.15",
        },
        {
          nom:
            "Chicorée et café, instantané, non sucré, prêt à boire (reconstituée avec de l'eau)",
          ef: "0.31",
        },
        {
          nom: "Café au lait ou cappuccino au chocolat, poudre soluble",
          ef: "1.14",
        },
        {
          nom:
            "Poudre cacaotée ou au chocolat sucrée pour boisson, enrichie en vitamines et minéraux",
          ef: "1.70",
        },
        {
          nom:
            "Poudre cacaotée ou au chocolat pour boisson, sucrée, enrichie en vitamines",
          ef: "1.70",
        },
        {
          nom:
            "Citron ou Lime, spécialité à diluer pour boissons, sans sucres ajoutés",
          ef: "0.16",
        },
        {
          nom:
            "Boisson plate aux fruits (10 à 50% de jus), à teneur réduite en sucres",
          ef: "0.08",
        },
        {
          nom: "Boisson plate aux fruits (teneur en jus non spécifiée), sucrée",
          ef: "0.08",
        },
        {
          nom: "Boisson plate aux fruits (10 à 50% de jus), sucrée",
          ef: "0.08",
        },
        {
          nom:
            "Boisson gazeuse aux fruits (à moins de 10% de jus), non sucrée, avec édulcorants",
          ef: "0.04",
        },
        { nom: "Boisson au jus de fruit et au lait", ef: "0.15" },
        { nom: "Tonic ou bitter, sucré", ef: "0.08" },
        {
          nom:
            "Boisson gazeuse aux fruits (à moins de 10% de jus), non sucrée, sans édulcorant",
          ef: "0.04",
        },
        { nom: "Boisson énergisante, sucrée", ef: "0.06" },
        {
          nom: "Boisson énergisante, non sucrée, avec édulcorants",
          ef: "0.06",
        },
        { nom: "Eau embouteillée de source", ef: "0.04" },
        { nom: "Boisson au soja, nature", ef: "0.06" },
        { nom: "Boisson au soja, nature, enrichie en calcium", ef: "0.06" },
        { nom: "Boisson au soja, aromatisée, sucrée", ef: "0.06" },
        {
          nom: "Boisson au soja, aromatisée, sucrée, enrichie en calcium",
          ef: "0.06",
        },
        { nom: "Boisson à base de riz, nature", ef: "0.30" },
        { nom: "Boisson à base d'avoine, nature", ef: "0.05" },
        {
          nom:
            "Lait de croissance infantile, liquide (aliment lacté destiné aux enfants en bas âge)",
          ef: "0.14",
        },
        {
          nom: "Lait 1er âge, prêt à consommer (préparation pour nourrissons)",
          ef: "0.15",
        },
        {
          nom: "Lait 2e âge, prêt à consommer (préparation pour nourrissons)",
          ef: "0.15",
        },
        { nom: "Lait en poudre, entier", ef: "1.56" },
        { nom: "Lait entier, UHT", ef: "0.13" },
        { nom: "Lait entier, pasteurisé", ef: "0.13" },
        { nom: "Lait concentré non sucré, entier", ef: "0.25" },
        { nom: "Lait concentré sucré, entier", ef: "0.25" },
        { nom: "Lait demi-écrémé, UHT", ef: "0.13" },
        { nom: "Lait demi-écrémé, pasteurisé", ef: "0.13" },
        { nom: "Lait en poudre, demi-écrémé", ef: "1.56" },
        { nom: "Lait demi-écrémé, UHT, enrichi en vitamines", ef: "0.13" },
        { nom: "Lait écrémé, UHT", ef: "0.13" },
        { nom: "Lait écrémé, pasteurisé", ef: "0.13" },
        { nom: "Lait en poudre, écrémé", ef: "1.56" },
        { nom: "Lait demi-écrémé, à teneur réduite en lactose", ef: "0.13" },
        {
          nom:
            "Boisson lactée aromatisée au chocolat, sucrée, au lait partiellement écrémé, enrichie et/ou restaurée en vitamines et/ou minéraux",
          ef: "0.15",
        },
        {
          nom:
            "Boisson lactée aromatisée à la fraise, sucrée, au lait partiellement écrémé, enrichie à la vitamine D",
          ef: "0.15",
        },
        { nom: "Lait de chèvre, entier, UHT", ef: "0.22" },
        { nom: "Lait de chèvre, demi-écrémé, UHT", ef: "0.22" },
        { nom: "Lait de chèvre, entier, cru", ef: "0.23" },
        { nom: "Lait de brebis, entier", ef: "0.26" },
        { nom: "Crème de lait, 30% MG, épaisse, rayon frais", ef: "0.34" },
        { nom: "Crème de lait, 30% MG, semi-épaisse, UHT", ef: "0.34" },
        { nom: "Crème chantilly, sous pression, UHT", ef: "0.34" },
        {
          nom: "Crème de lait, 15 à 20% MG, légère, semi-épaisse, UHT",
          ef: "0.34",
        },
        {
          nom: "Crème de lait, 15 à 20% MG, légère, épaisse, rayon frais",
          ef: "0.34",
        },
        {
          nom: "Spécialité à base de crème légère 8% MG, fluide ou épaisse",
          ef: "0.34",
        },
        {
          nom:
            "Boisson lactée, lait fermenté ou yaourt à boire, aromatisé, sucré",
          ef: "0.25",
        },
        {
          nom:
            "Spécialité fromagère non affinée à tartiner environ 30-40 % MG aromatisée (ex: ail et fines herbes)",
          ef: "0.50",
        },
        {
          nom:
            "Boisson lactée, lait fermenté ou yaourt à boire, aux fruits, sucré",
          ef: "0.25",
        },
        {
          nom: "Boisson lactée, lait fermenté ou yaourt à boire, nature, sucré",
          ef: "0.25",
        },
        {
          nom:
            "Boisson lactée, lait fermenté ou yaourt à boire, nature, sucré, au L Casei",
          ef: "0.25",
        },
        {
          nom:
            "Lait fermenté ou spécialité laitière type yaourt, aromatisé, sucré, au bifidus",
          ef: "0.18",
        },
        {
          nom:
            "Lait fermenté ou spécialité laitière type yaourt, aux fruits, sucré, au bifidus",
          ef: "0.36",
        },
        {
          nom:
            "Lait fermenté ou spécialité laitière type yaourt, nature, au bifidus",
          ef: "0.25",
        },
        { nom: "Yaourt à la grecque, au lait de brebis", ef: "0.30" },
        { nom: "Yaourt à la grecque, sur lit de fruits", ef: "0.35" },
        { nom: "Yaourt au lait de chèvre, nature, 5% MG environ", ef: "0.27" },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, aux céréales, 0% MG",
          ef: "0.27",
        },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, aromatisé, avec édulcorants, 0% MG",
          ef: "0.18",
        },
        {
          nom: "Yaourt, lait fermenté ou spécialité laitière, aromatisé, sucré",
          ef: "0.18",
        },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, aromatisé, sucré, à la crème",
          ef: "0.20",
        },
        {
          nom: "Yaourt, lait fermenté ou spécialité laitière, aux céréales",
          ef: "0.27",
        },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, aux copeaux de chocolat, à la crème, sucré",
          ef: "0.49",
        },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, aux fruits, avec édulcorants, 0% MG",
          ef: "0.35",
        },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, aux fruits, avec édulcorants, 0% MG, enrichi en vitamine D",
          ef: "0.35",
        },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, aux fruits, sucré",
          ef: "0.35",
        },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, aux fruits, sucré, à la crème",
          ef: "0.35",
        },
        { nom: "Mozzarella au lait de vache", ef: "0.50" },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, aux fruits, sucré, enrichi en vitamine D",
          ef: "0.35",
        },
        {
          nom: "Yaourt, lait fermenté ou spécialité laitière, nature",
          ef: "0.24",
        },
        {
          nom: "Yaourt, lait fermenté ou spécialité laitière, nature, 0% MG",
          ef: "0.24",
        },
        {
          nom:
            "Yaourt, lait fermenté ou spécialité laitière, nature, à la crème",
          ef: "0.26",
        },
        {
          nom: "Yaourt, lait fermenté ou spécialité laitière, nature, sucré",
          ef: "0.18",
        },
        { nom: "Faisselle, 6% MG environ", ef: "0.49" },
        { nom: "Fromage blanc nature, 0% MG", ef: "0.34" },
        { nom: "Fromage blanc nature, 3% MG environ", ef: "0.34" },
        { nom: "Fromage blanc nature, gourmand, 8% MG environ", ef: "0.34" },
        {
          nom:
            "Fromage blanc ou spécialité laitière, aux fruits, sucré, gourmand, 7% MG environ",
          ef: "0.20",
        },
        {
          nom: "Fromage frais type petit suisse, aux fruits, 2-3% MG",
          ef: "0.26",
        },
        {
          nom:
            "Fromage frais type petit suisse, aux fruits, 2-3% MG, enrichi en calcium et vitamine D",
          ef: "0.26",
        },
        { nom: "Fromage frais type petit suisse, nature, 0% MG", ef: "0.34" },
        {
          nom: "Fromage frais type petit suisse, nature, 4% MG environ",
          ef: "0.34",
        },
        {
          nom: "Fromage frais type petit suisse, nature, 10% MG environ",
          ef: "0.34",
        },
        {
          nom:
            "Fromage frais type petit suisse, aromatisé aux fruits, 2-3% MG, enrichi en calcium et vitamine D",
          ef: "0.26",
        },
        { nom: "Crème dessert, allégée en MG, rayon frais", ef: "0.22" },
        { nom: "Flan aux œufs, rayon frais", ef: "0.27" },
        { nom: "Lait emprésuré aromatisé, rayon frais", ef: "0.15" },
        {
          nom: "Lait gélifié aromatisé, nappé caramel, rayon frais",
          ef: "0.24",
        },
        { nom: "Lait gélifié aromatisé, rayon frais", ef: "0.18" },
        {
          nom:
            "Liégeois ou viennois (chocolat, café, caramel ou vanille), rayon frais",
          ef: "0.45",
        },
        {
          nom:
            "Lait gélifié aromatisé, allégé en matière grasse et en sucre, rayon frais",
          ef: "0.18",
        },
        { nom: "Panna cotta, rayon frais", ef: "0.36" },
        {
          nom: "Cheesecake ou Gâteau au fromage frais, rayon frais",
          ef: "0.47",
        },
        { nom: "Dessert au soja, aux fruits, rayon frais", ef: "0.18" },
        { nom: "Dessert au soja, nature, rayon frais", ef: "0.11" },
        { nom: "Tiramisu, rayon frais", ef: "2.09" },
        { nom: "Lait fermenté à boire, nature, maigre", ef: "0.15" },
        { nom: "Lait fermenté à boire, nature, au lait entier", ef: "0.15" },
        { nom: "Mousse à la crème de marrons, rayon frais", ef: "0.45" },
        { nom: "Yaourt à la grecque, nature", ef: "0.24" },
        { nom: "Artichaut, cuit", ef: "0.71" },
        { nom: "Asperge, bouillie/cuite à l'eau", ef: "0.39" },
        { nom: "Aubergine, cuite", ef: "0.63" },
        { nom: "Betterave rouge, cuite", ef: "0.12" },
        { nom: "Bette ou blette, crue", ef: "0.06" },
        { nom: "Bette ou blette, cuite", ef: "0.14" },
        { nom: "Brocoli, cuit", ef: "0.16" },
        { nom: "Carotte, appertisée, égouttée", ef: "0.22" },
        { nom: "Carotte, cuite", ef: "0.14" },
        { nom: "Carotte, crue", ef: "0.07" },
        { nom: "Salade ou chicorée frisée, crue", ef: "0.13" },
        { nom: "Chou de Bruxelles, cuit", ef: "0.14" },
        { nom: "Chou rouge, cru", ef: "0.12" },
        { nom: "Chou vert, cuit", ef: "0.23" },
        { nom: "Chou-fleur, cru", ef: "0.07" },
        { nom: "Chou-fleur, cuit", ef: "0.14" },
        { nom: "Coeur de palmier, appertisé, égoutté", ef: "0.44" },
        { nom: "Concombre, pulpe et peau, cru", ef: "0.43" },
        { nom: "Courgette, pulpe et peau, crue", ef: "0.05" },
        { nom: "Courgette, pulpe et peau, cuite", ef: "0.12" },
        { nom: "Cresson de fontaine, cru", ef: "0.09" },
        { nom: "Céleri branche, cru", ef: "0.08" },
        { nom: "Céleri branche, cuit", ef: "0.15" },
        { nom: "Céleri-rave, cuit", ef: "0.14" },
        { nom: "Endive, crue", ef: "0.12" },
        { nom: "Épinard, cuit", ef: "0.12" },
        { nom: "Fenouil, cru", ef: "0.13" },
        {
          nom: 'Haricot mungo germé ou pousse de "soja", appertisé, égoutté',
          ef: "0.29",
        },
        { nom: "Haricot vert, cuit", ef: "0.23" },
        { nom: "Laitue, crue", ef: "0.13" },
        { nom: "Navet, cuit", ef: "0.14" },
        { nom: "Oignon, cru", ef: "0.07" },
        { nom: "Oignon, cuit", ef: "0.15" },
        { nom: "Petits pois, appertisés, égouttés", ef: "0.24" },
        { nom: "Petits pois, cuits", ef: "0.16" },
        { nom: "Pissenlit, cru", ef: "0.13" },
        { nom: "Poireau, cru", ef: "0.11" },
        { nom: "Poireau, cuit", ef: "0.19" },
        { nom: "Poivron, vert, jaune ou rouge, cru", ef: "0.13" },
        { nom: "Potiron, appertisé, égoutté", ef: "0.24" },
        { nom: "Potiron, cru", ef: "0.10" },
        { nom: "Radis rouge, cru", ef: "0.06" },
        { nom: "Salsifis, cuit", ef: "0.14" },
        { nom: "Tomate de saison, crue", ef: "0.10" },
        { nom: "Tomate, pelée, appertisée, égouttée", ef: "0.20" },
        { nom: "Maïs doux, en épis, cuit", ef: "0.24" },
        { nom: "Topinambour, cuit", ef: "0.21" },
        { nom: "Macédoine de légumes, appertisée, égouttée", ef: "0.20" },
        { nom: "Artichaut, cru", ef: "0.40" },
        { nom: "Aubergine, crue", ef: "0.49" },
        { nom: "Cardon, cru", ef: "0.09" },
        { nom: "Céleri-rave, cru", ef: "0.07" },
        { nom: "Brocoli, cru", ef: "0.08" },
        { nom: "Chou de Bruxelles, cru", ef: "0.07" },
        { nom: "Épinard, cru", ef: "0.05" },
        { nom: "Épinard, appertisé, égoutté", ef: "0.19" },
        { nom: "Haricot vert importé par avion, cru", ef: "0.14" },
        { nom: "Haricot vert, appertisé, égoutté", ef: "0.28" },
        { nom: "Haricot beurre, appertisé, égoutté", ef: "0.26" },
        { nom: "Navet, pelé, cru", ef: "0.07" },
        { nom: "Chou-rave, cru", ef: "0.07" },
        { nom: "Maïs doux, appertisé, égoutté", ef: "0.27" },
        { nom: "Artichaut, appertisé, égoutté", ef: "0.47" },
        { nom: "Tomate, concentré, appertisé", ef: "0.12" },
        { nom: "Chou vert, cru", ef: "0.12" },
        { nom: "Haricot vert, surgelé, cru", ef: "0.20" },
        { nom: "Haricot vert, surgelé, cuit", ef: "0.25" },
        { nom: "Petits pois, crus", ef: "0.09" },
        { nom: "Asperge, pelée, crue", ef: "0.28" },
        { nom: "Asperge, appertisée, égouttée", ef: "0.44" },
        { nom: "Chou de Bruxelles, appertisé, égoutté", ef: "0.21" },
        { nom: "Céleri branche, appertisé, égoutté", ef: "0.17" },
        { nom: "Salsifis, appertisé, égoutté", ef: "0.21" },
        { nom: "Chou-fleur, surgelé, cru", ef: "0.15" },
        { nom: "Épinard, surgelé, cru", ef: "0.12" },
        { nom: "Petits pois, surgelés, crus", ef: "0.15" },
        { nom: "Poivron vert, cru", ef: "0.13" },
        { nom: "Poivron vert, cuit", ef: "0.22" },
        { nom: "Poivron rouge, cru", ef: "0.13" },
        { nom: "Poivron rouge, cuit", ef: "0.22" },
        { nom: "Radis noir, cru", ef: "0.06" },
        { nom: "Scarole, crue", ef: "0.17" },
        { nom: "Betterave rouge, crue", ef: "0.06" },
        { nom: "Petits pois et carottes, appertisés, égouttés", ef: "0.21" },
        { nom: "Chou-rave, bouilli/cuit à l'eau", ef: "0.15" },
        { nom: "Chou rouge, bouilli/cuit à l'eau", ef: "0.23" },
        { nom: "Potiron, cuit", ef: "0.19" },
        { nom: "Échalote, crue", ef: "0.07" },
        { nom: "Mâche, crue", ef: "0.13" },
        { nom: "Légumes, mélange surgelé, crus", ef: "0.13" },
        { nom: "Champignon, morille, crue", ef: "0.08" },
        { nom: "Maïs doux, en épis, surgelé, cru", ef: "0.18" },
        { nom: "Oseille, crue", ef: "0.10" },
        { nom: "Chou blanc, cru", ef: "0.12" },
        { nom: "Fenouil, bouilli/cuit à l'eau", ef: "0.22" },
        { nom: "Tomate verte, crue", ef: "0.10" },
        { nom: "Épinard, surgelé, cuit", ef: "0.16" },
        { nom: "Chou-fleur, surgelé, cuit", ef: "0.18" },
        { nom: "Petits pois, surgelés, cuits", ef: "0.18" },
        { nom: "Haricot de Lima, cru", ef: "0.11" },
        { nom: "Courge musquée, pulpe, crue", ef: "0.10" },
        { nom: "Potimarron, pulpe, cru", ef: "0.10" },
        { nom: "Panais, cuit", ef: "0.14" },
        { nom: "Courge hokkaïdo, pulpe, crue", ef: "0.10" },
        { nom: "Fondue de poireau", ef: "0.39" },
        { nom: "Courge melonnette, pulpe, crue", ef: "0.10" },
        { nom: "Courge doubeurre (butternut), pulpe, crue", ef: "0.10" },
        { nom: "Courge, crue", ef: "0.10" },
        { nom: "Courge spaghetti, pulpe, cuite", ef: "0.19" },
        { nom: "Courge spaghetti, pulpe, crue", ef: "0.10" },
        { nom: "Piment, cru", ef: "0.34" },
        { nom: "Artichaut, coeur, appertisé, égoutté", ef: "0.47" },
        { nom: "Artichaut, fond, appertisé, égoutté", ef: "0.21" },
        { nom: "Tétragone cornue, cuite", ef: "0.12" },
        { nom: "Chicorée rouge, crue", ef: "0.13" },
        { nom: "Chicorée verte, crue", ef: "0.13" },
        { nom: "Rutabaga, cuit", ef: "0.14" },
        { nom: "Citrouille, pulpe, crue", ef: "0.10" },
        { nom: "Chou chinois ou pak-choi ou pé-tsai, cru", ef: "0.12" },
        { nom: "Poivron jaune, cru", ef: "0.13" },
        { nom: "Tomate, pulpe, appertisée", ef: "0.16" },
        { nom: "Tomate, purée, appertisée", ef: "0.12" },
        { nom: "Laitue romaine, crue", ef: "0.13" },
        { nom: "Tomate cerise, crue", ef: "0.07" },
        { nom: "Pois mange-tout ou pois gourmand, cru", ef: "0.12" },
        { nom: "Oignon, séché", ef: "1.22" },
        { nom: "Panais, cru", ef: "0.07" },
        { nom: 'Haricot mungo germé ou pousse de "soja", cru', ef: "0.11" },
        { nom: "Bambou, pousses, appertisées, égouttées", ef: "0.44" },
        { nom: "Tomate, séchée", ef: "1.96" },
        { nom: "Haricots blancs à la sauce tomate, appertisés", ef: "0.11" },
        { nom: "Haricot beurre, cru", ef: "0.13" },
        { nom: "Topinambour, cru", ef: "0.11" },
        { nom: "Salsifis noir, cru", ef: "0.07" },
        { nom: "Bambou, pousse, crue", ef: "0.27" },
        { nom: "Cresson alénois, cru", ef: "0.13" },
        { nom: "Laitue iceberg, crue", ef: "0.09" },
        { nom: "Rutabaga, cru", ef: "0.07" },
        { nom: "Haricot beurre, surgelé, cru", ef: "0.18" },
        { nom: "Brocoli, surgelé, cru", ef: "0.16" },
        { nom: "Brocoli, surgelé, cuit", ef: "0.19" },
        { nom: "Chou de Bruxelles, surgelé, cru", ef: "0.14" },
        { nom: "Chou de Bruxelles, surgelé, cuit", ef: "0.17" },
        { nom: "Carotte, surgelée, crue", ef: "0.12" },
        { nom: "Carotte, surgelée, cuite", ef: "0.15" },
        { nom: "Concombre, pulpe, cru", ef: "0.43" },
        { nom: "Petits pois et carottes, surgelés, crus", ef: "0.15" },
        { nom: "Petits pois et carottes, surgelés, cuits", ef: "0.16" },
        {
          nom: "Pois mange-tout ou pois gourmand, bouilli/cuit à l'eau",
          ef: "0.20",
        },
        { nom: "Roquette, crue", ef: "0.13" },
        { nom: "Chou frisé, cru", ef: "0.09" },
        { nom: "Chou frisé, cuit", ef: "0.18" },
        { nom: "Chou chinois (pak-choi ou pé-tsai), cuit", ef: "0.23" },
        { nom: "Courgette, pulpe et peau, surgelée, crue", ef: "0.12" },
        { nom: "Crosne, surgelé, cru", ef: "0.13" },
        { nom: "Artichaut, fond, surgelé, cru", ef: "0.36" },
        { nom: "Maïs doux, surgelé, cru", ef: "0.18" },
        { nom: "Navet, surgelé, cru", ef: "0.12" },
        { nom: "Oignon, surgelé, cru", ef: "0.13" },
        { nom: "Poireau, surgelé, cru", ef: "0.16" },
        { nom: "Salsifis, surgelé, cru", ef: "0.12" },
        { nom: "Piperade basquaise", ef: "0.19" },
        { nom: "Cardon, cuit", ef: "0.17" },
        { nom: "Tomate, pulpe et peau, bouillie/cuite à l'eau", ef: "0.18" },
        { nom: "Pois mange-tout ou pois gourmands, cuits", ef: "0.20" },
        { nom: "Petit pot légumes, dès 4-6 mois", ef: "0.16" },
        { nom: "Petit pot légumes, avec féculent, dès 4/6 mois", ef: "0.16" },
        { nom: "Plat légumes, avec féculent, dès 6-8 mois", ef: "0.14" },
        {
          nom: "Plat légumes, avec féculent et lait/crème, dès 6-8 mois",
          ef: "0.16",
        },
        {
          nom: "Plat légumes, avec féculent et lait/crème, dès 8-12 mois",
          ef: "0.16",
        },
        {
          nom: "Plat légumes, avec féculent et lait/crème, dès 12 mois",
          ef: "0.16",
        },
        { nom: "Soupe pour bébé légumes et pomme de terre", ef: "0.08" },
        { nom: "Soupe pour bébé légumes, céréales et lait", ef: "0.09" },
        {
          nom: "Plat légumes, avec féculent et lait/crème, dès 18 mois",
          ef: "0.16",
        },
        { nom: "Échalote, cuite", ef: "0.15" },
        { nom: "Tomate, séchée, à l'huile", ef: "1.96" },
        { nom: "Haricots verts, purée", ef: "0.22" },
        { nom: "Légumes (3-4 sortes en mélange), purée", ef: "0.16" },
        { nom: "Brocoli, purée", ef: "0.15" },
        {
          nom: "Tomate, coulis, appertisé (purée de tomates mi-réduite à 11%)",
          ef: "0.12",
        },
        { nom: "Carotte, purée", ef: "0.13" },
        {
          nom: "Poêlée de légumes assaisonnés sans champignon, surgelée, crue",
          ef: "0.25",
        },
        { nom: "Légumes pour potages, surgelés, crus", ef: "0.13" },
        { nom: "Courgette, purée", ef: "0.14" },
        { nom: "Julienne ou brunoise de légumes, surgelée, crue", ef: "0.10" },
        { nom: "Légumes pour ratatouille, surgelés", ef: "0.11" },
        {
          nom:
            "Printanière de légumes, surgelée, crue (haricots verts, carottes, pomme de terre, petits pois, oignons)",
          ef: "0.14",
        },
        { nom: "Tomate, double concentré, appertisé", ef: "0.12" },
        { nom: "Haricot plat, cru", ef: "0.13" },
        { nom: "Épinard, jeunes pousses pour salades, cru", ef: "0.05" },
        { nom: "Macédoine de légumes, surgelée", ef: "0.12" },
        { nom: "Mesclun ou salade, mélange de jeunes pousses", ef: "0.17" },
        {
          nom:
            "Poêlée de légumes assaisonnés à l'asiatiques ou wok de légumes, surgelée, crue",
          ef: "0.25",
        },
        {
          nom:
            "Poêlée de légumes assaisonnés grillée, méridionale ou méditerranéenne, surgelée, crue",
          ef: "0.25",
        },
        { nom: "Poivron rouge, appertisé, égoutté", ef: "0.25" },
        { nom: "Céleri-rave, purée", ef: "0.13" },
        { nom: "Asperge, verte, crue", ef: "0.28" },
        { nom: "Chou romanesco ou brocoli à pomme, cru", ef: "0.09" },
        { nom: "Asperge, blanche ou violette, pelée, crue", ef: "0.28" },
        { nom: "Salicorne (Salicornia sp.), fraîche", ef: "0.16" },
        { nom: "Petits pois, purée", ef: "0.15" },
        { nom: "Épinard, purée", ef: "0.11" },
        { nom: "Tomate, pulpe et peau, rôtie/cuite au four", ef: "0.20" },
        { nom: "Légumes pour couscous, surgelés, crus", ef: "0.11" },
        { nom: "Légumes pour couscous, cuits", ef: "0.13" },
        {
          nom:
            'Poêlée de légumes assaisonnés aux champignons ("champêtre"), surgelée',
          ef: "0.25",
        },
        { nom: "Fève, cuite", ef: "0.06" },
        { nom: "Haricot blanc, sec", ef: "0.05" },
        { nom: "Haricot blanc, cuit", ef: "0.06" },
        { nom: "Haricot rouge, cuit", ef: "0.06" },
        { nom: "Lentille, sèche", ef: "0.05" },
        { nom: "Lentille, cuite", ef: "0.06" },
        { nom: "Pois cassé, cuit", ef: "0.06" },
        { nom: "Pois chiche, cuit", ef: "0.14" },
        { nom: "Haricot flageolet, appertisé, égouttés", ef: "0.17" },
        { nom: "Lentille, cuisinée, appertisée, égouttée", ef: "0.17" },
        { nom: "Haricot blanc, appertisé, égoutté", ef: "0.18" },
        { nom: "Haricot flageolet, cuit", ef: "0.06" },
        { nom: "Pois cassé, sec", ef: "0.14" },
        { nom: "Pois chiche, sec", ef: "0.12" },
        { nom: "Fève à écosser, fraîche", ef: "0.12" },
        { nom: "Fève, sèche", ef: "0.12" },
        { nom: "Lentille, germée", ef: "0.11" },
        { nom: "Haricot rouge, appertisé, égoutté", ef: "0.17" },
        { nom: "Haricot rouge, sec", ef: "0.06" },
        { nom: "Haricot mungo, sec", ef: "0.12" },
        { nom: "Haricot mungo, cuit", ef: "0.06" },
        { nom: "Pois chiche, appertisé, égoutté", ef: "0.21" },
        { nom: "Lupin, graine crue", ef: "0.15" },
        { nom: "Lentille corail, sèche", ef: "0.05" },
        { nom: "Fève, fraîche, surgelée", ef: "0.07" },
        { nom: "Haricot flageolet, surgelé", ef: "0.07" },
        { nom: "Haricot flageolet, vert, sec", ef: "0.06" },
        { nom: "Haricot flageolet, vert, cuit", ef: "0.06" },
        { nom: "Fève, pelée, surgelée, crue", ef: "0.15" },
        { nom: "Fève, pelée, surgelée, cuite à l'eau", ef: "0.07" },
        { nom: "Fève, surgelée, cuite à l'eau", ef: "0.07" },
        { nom: "Arachide, bouillie/cuite à l'eau, salée", ef: "1.28" },
        { nom: "Lentille verte, sèche", ef: "0.05" },
        { nom: "Lentille blonde, sèche", ef: "0.05" },
        { nom: "Lentille verte, cuite", ef: "0.06" },
        { nom: "Lentille blonde, cuite", ef: "0.06" },
        { nom: "Lentille corail, cuite", ef: "0.06" },
        { nom: "Farine de soja", ef: "0.25" },
        { nom: "Soja, graine entière", ef: "0.21" },
        { nom: "Tofu, nature", ef: "0.09" },
        { nom: "Dessert au soja aromatisé, rayon frais", ef: "0.18" },
        { nom: "Miso", ef: "0.15" },
        { nom: "Tempeh", ef: "0.14" },
        { nom: "Sirop pour fruits appertisés au sirop", ef: "0.09" },
        { nom: "Sirop léger pour fruits appertisés au sirop", ef: "0.09" },
        {
          nom: "Wakamé (Undaria pinnatifida), séchée ou déshydratée",
          ef: "1.25",
        },
        { nom: "Laitue de mer (Ulva sp.), séchée ou déshydratée", ef: "1.25" },
        {
          nom: "Kombu royal (Saccharina latissima), séchée ou déshydratée",
          ef: "1.25",
        },
        { nom: "Nori (Porphyra sp.), séchée ou déshydratée", ef: "1.26" },
        { nom: "Dulse (Palmaria palmata), séchée ou déshydratée", ef: "1.25" },
        {
          nom:
            "Kombu ou kombu japonais (Laminaria japonica), séchée ou déshydratée",
          ef: "1.26",
        },
        {
          nom: "Kombu breton (Laminaria digitata), séchée ou déshydratée",
          ef: "1.25",
        },
        {
          nom: "Haricot de mer (Himanthalia elongata), séchée ou déshydratée",
          ef: "1.25",
        },
        {
          nom:
            "Gracilaire ou ogonori (Gracilaria verrucosa), séchée ou déshydratée",
          ef: "1.25",
        },
        {
          nom:
            "Fucus vésiculeux (Fucus serratus ou Fucus vesiculosus), séché ou déshydraté",
          ef: "1.25",
        },
        {
          nom: "Ao-nori (Enteromorpha sp.), séchée ou déshydratée",
          ef: "1.25",
        },
        {
          nom:
            "Lichen de mer ou pioca ou goémon rouge (Chondrus crispus), séché ou déshydraté",
          ef: "1.25",
        },
        {
          nom:
            "Ascophylle noueux ou goémon noir (Ascophyllum nodosum), séché ou déshydraté",
          ef: "1.25",
        },
        {
          nom: "Wakamé atlantique (Alaria esculenta), séchée ou déshydratée",
          ef: "1.25",
        },
        { nom: "Mouton, viande, crue", ef: "3.83" },
        { nom: "Mouton, épaule, crue", ef: "3.83" },
        { nom: "Mouton, pied, cru", ef: "3.13" },
        { nom: "Mouton, tête, crue", ef: "3.13" },
        { nom: "Mouton, gigot, cru", ef: "4.79" },
        { nom: "Agneau, côtelette, crue", ef: "3.83" },
        { nom: "Agneau, côtelette, grillée", ef: "4.85" },
        { nom: "Agneau, gigot, cru", ef: "4.79" },
        { nom: "Agneau, gigot, rôti/cuit au four", ef: "6.09" },
        { nom: "Agneau, épaule, crue", ef: "3.83" },
        { nom: "Agneau, épaule, maigre, crue", ef: "3.83" },
        { nom: "Agneau, épaule, rôtie/cuite au four", ef: "4.87" },
        { nom: "Agneau, épaule, maigre, rôtie/cuite au four", ef: "4.87" },
        { nom: "Agneau, collier, braisé ou bouilli", ef: "6.09" },
        { nom: "Agneau, côte filet, grillée/poêlée", ef: "6.07" },
        { nom: "Agneau, côte première, grillée/poêlée", ef: "6.07" },
        {
          nom: "Agneau, selle, partie maigre, rôtie/cuite au four",
          ef: "6.09",
        },
        { nom: "Agneau, collier, cru", ef: "4.79" },
        { nom: "Agneau, selle, crue", ef: "4.79" },
        { nom: "Agneau, côte filet, crue", ef: "4.79" },
        { nom: "Agneau, côte première, crue", ef: "4.79" },
        { nom: "Agneau, gigot, grillé/poêlé", ef: "6.07" },
        { nom: "Agneau, gigot, braisé", ef: "6.09" },
        { nom: "Agneau, selle, partie maigre, grillée/poêlée", ef: "6.07" },
        { nom: "Chevreau, cru", ef: "4.79" },
        { nom: "Chevreau, cuit", ef: "6.07" },
        { nom: "Oeuf, cru", ef: "0.53" },
        { nom: "Oeuf, blanc (blanc d'oeuf), cru", ef: "0.59" },
        { nom: "Oeuf, jaune (jaune d'oeuf), cru", ef: "0.59" },
        { nom: "Oeuf, jaune (jaune d'oeuf), en poudre", ef: "0.54" },
        { nom: "Oeuf, blanc (blanc d'oeuf), en poudre", ef: "0.54" },
        { nom: "Oeuf, blanc (blanc d'oeuf), cuit", ef: "0.64" },
        { nom: "Oeuf, jaune (jaune d'oeuf), cuit", ef: "0.64" },
        { nom: "Oeuf, dur", ef: "0.59" },
        { nom: "Oeuf, poché", ef: "0.61" },
        { nom: "Oeuf, en poudre", ef: "0.68" },
        { nom: "Oeuf, à la coque", ef: "0.61" },
        { nom: "Oeuf de cane, cru", ef: "0.53" },
        { nom: "Oeuf d'oie, cru", ef: "0.53" },
        { nom: "Oeuf de dinde, cru", ef: "0.47" },
        { nom: "Oeuf, brouillé, avec matière grasse", ef: "0.74" },
        { nom: "Oeuf, au plat, sans matière grasse", ef: "0.58" },
        { nom: "Omelette au fromage", ef: "0.56" },
        { nom: "Omelette aux lardons", ef: "0.70" },
        { nom: "Omelette aux champignons", ef: "0.48" },
        { nom: "Omelette aux fines herbes", ef: "0.55" },
        {
          nom:
            "Tortilla espagnole aux oignons (omelette aux pommes de terre et oignons)",
          ef: "0.30",
        },
        {
          nom: "Gâteau Paris-Brest (pâte à choux crème mousseline praliné)",
          ef: "0.43",
        },
        {
          nom:
            "Gâteau au chocolat type forêt noire (génoise au chocolat et crème multi-couches, avec ou sans cerises)",
          ef: "0.48",
        },
        {
          nom: "Gâteau mousse de fruits sur génoise, type miroir, bavarois",
          ef: "0.42",
        },
        { nom: "Entremets type Opéra", ef: "0.73" },
        { nom: "Fraisier ou framboisier", ef: "0.55" },
        { nom: "Baba au rhum, préemballé", ef: "0.12" },
        { nom: "Canelé", ef: "0.27" },
        {
          nom: "Macaron moelleux fourré à la confiture ou à la crème",
          ef: "0.90",
        },
        { nom: "Macaron sec", ef: "0.81" },
        { nom: "Bûche de Noël pâtissière", ef: "0.73" },
        { nom: "Brownie au chocolat", ef: "0.82" },
        {
          nom: "Rocher coco ou Congolais (petit gâteau à la noix de coco)",
          ef: "0.32",
        },
        { nom: "Biscuit de Savoie", ef: "0.48" },
        { nom: "Quatre-quarts ou barre pâtissière, préemballé", ef: "0.55" },
        { nom: "Gâteau au citron, tout type", ef: "0.29" },
        { nom: "Far aux pruneaux", ef: "0.44" },
        { nom: "Kouign Amann", ef: "0.21" },
        { nom: "Pain d'épices", ef: "0.20" },
        {
          nom: "Baklava ou Baklawa (pâtisserie orientale aux amandes et sirop)",
          ef: "0.88",
        },
        {
          nom: "Corne de gazelle (pâtisserie orientale aux amandes et sirop)",
          ef: "0.95",
        },
        { nom: "Pâte à pizza fine, crue", ef: "0.18" },
        { nom: "Préparation pour pâte à pizza", ef: "0.22" },
        { nom: "Pâte brisée, crue", ef: "0.48" },
        { nom: "Pâte brisée, matière grasse végétale, cuite", ef: "0.48" },
        { nom: "Pâte brisée, pur beurre, crue", ef: "0.48" },
        { nom: "Pâte brisée, pur beurre, surgelée, crue", ef: "0.48" },
        { nom: "Pâte feuilletée, matière grasse végétale, crue", ef: "0.53" },
        { nom: "Pâte feuilletée, surgelée, crue", ef: "0.53" },
        { nom: "Pâte feuilletée, cuite", ef: "0.54" },
        { nom: "Pâte feuilletée pur beurre, crue", ef: "0.53" },
        { nom: "Pâte feuilletée pur beurre, surgelée crue", ef: "0.53" },
        { nom: "Pâte feuilletée pur beurre, cuite", ef: "0.53" },
        { nom: "Pâte sablée, crue", ef: "0.49" },
        { nom: "Pâte sablée, cuite", ef: "0.49" },
        { nom: "Pâte sablée pur beurre, crue", ef: "0.49" },
        { nom: "Pâte phyllo ou Pâte filo, crue", ef: "0.30" },
        { nom: "Pâte sablée pur beurre, surgelée, crue", ef: "0.48" },
        { nom: "Pâte sablée pur beurre, cuite", ef: "0.49" },
        { nom: "Chou à la crème (chantilly ou pâtissière)", ef: "0.39" },
        { nom: "Chou à la crème chantilly", ef: "0.39" },
        { nom: "Chou à la crème pâtissière", ef: "0.28" },
        { nom: "Chouquette", ef: "0.33" },
        { nom: "Profiterole avec glace vanille et sauce chocolat", ef: "0.41" },
        {
          nom: "Profiteroles (crème pâtissière et sauce chocolat), rayon frais",
          ef: "0.41",
        },
        { nom: "Éclair", ef: "0.39" },
        { nom: "Tarte aux fruits et crème pâtissière", ef: "0.51" },
        { nom: "Chausson aux pommes", ef: "0.31" },
        {
          nom:
            "Tarte normande aux pommes (garniture farine, œufs, crème, sucre, calvados)",
          ef: "0.58",
        },
        { nom: "Tarte au citron", ef: "0.43" },
        { nom: "Tarte ou tartelette aux pommes", ef: "0.25" },
        { nom: "Tarte aux fraises", ef: "0.63" },
        { nom: "Crumble aux pommes", ef: "0.28" },
        { nom: "Tarte aux abricots", ef: "0.27" },
        { nom: "Tarte aux fruits rouges", ef: "0.51" },
        { nom: "Tarte Tatin aux pommes", ef: "0.30" },
        { nom: "Tarte au chocolat, fabrication artisanale", ef: "0.73" },
        { nom: "Tarte ou tartelette aux fruits", ef: "0.50" },
        { nom: "Flan pâtissier aux oeufs ou à la parisienne", ef: "0.26" },
        { nom: "Charlotte aux fruits", ef: "0.36" },
        {
          nom: "Gâteau de semoule aux raisins et caramel, rayon frais",
          ef: "0.18",
        },
        { nom: "Gâteau de semoule, appertisé", ef: "0.21" },
        { nom: "Gâteau de riz au caramel, rayon frais", ef: "0.21" },
        { nom: "Gâteau au chocolat", ef: "0.80" },
        { nom: "Gâteau moelleux au chocolat, préemballé", ef: "0.83" },
        { nom: "Gâteau au yaourt", ef: "0.31" },
        { nom: "Gâteau au fromage blanc", ef: "0.31" },
        { nom: "Gâteau moelleux nature type génoise", ef: "0.41" },
        { nom: "Galette des rois feuilletée", ef: "0.84" },
        {
          nom: "Galette des rois feuilletée, fourrée frangipane, et Pithiviers",
          ef: "0.84",
        },
        { nom: "Crêpe, nature, préemballée, rayon frais", ef: "0.23" },
        {
          nom: "Crêpe, nature, préemballée, rayon température ambiante",
          ef: "0.23",
        },
        { nom: "Galette de sarrasin, nature, préemballée", ef: "0.11" },
        { nom: "Gâteau basque, crème pâtissière", ef: "0.32" },
        { nom: "Gâteau basque, cerises", ef: "0.32" },
        { nom: "Blini", ef: "0.22" },
        { nom: "Crêpe préemballée, fourrée au sucre", ef: "0.23" },
        { nom: "Crêpe maison, fourrée à la confiture", ef: "0.23" },
        {
          nom:
            "Crêpe maison, fourrée au chocolat ou à la pâte à tartiner chocolat et noisettes",
          ef: "0.23",
        },
        { nom: "Crêpe préemballée, fourrée chocolat", ef: "0.50" },
        { nom: "Crêpe préemballée, fourrée fraise", ef: "0.36" },
        {
          nom:
            "Gaufre moelleuse (type bruxelloise ou liégeoise), nature ou sucrée, préemballée",
          ef: "0.38",
        },
        {
          nom:
            "Gaufre moelleuse (type bruxelloise ou liégeoise), chocolatée, préemballée",
          ef: "0.56",
        },
        {
          nom:
            "Gaufre croustillante (fine ou sèche), nature ou sucrée, préemballée",
          ef: "0.35",
        },
        {
          nom: "Gaufre croustillante (fine ou sèche), chocolatée, préemballée",
          ef: "0.45",
        },
        {
          nom: "Beignet rond moelleux, sans fourrage, saupoudré de sucre",
          ef: "0.22",
        },
        { nom: "Beignet à la confiture", ef: "0.24" },
        { nom: "Beignet fourré aux fruits, préemballé", ef: "0.29" },
        { nom: "Beignet fourré goût chocolat, préemballé", ef: "0.51" },
        { nom: "Cake aux fruits", ef: "0.38" },
        { nom: "Gâteau marbré", ef: "0.48" },
        { nom: "Gâteau sablé aux fruits, préemballé", ef: "0.47" },
        { nom: "Gâteau moelleux aux fruits", ef: "0.42" },
        { nom: "Gâteau moelleux aux fruits à coque", ef: "0.55" },
        {
          nom:
            "Gâteau moelleux fourré au chocolat ou aux pépites de chocolat ou au lait",
          ef: "0.83",
        },
        { nom: "Génoise fourrée et nappée au chocolat", ef: "0.83" },
        {
          nom:
            "Gâteau moelleux fourré aux fruits type mini-roulé ou mini-cake fourré",
          ef: "0.42",
        },
        { nom: "Muffin, aux myrtilles ou au chocolat", ef: "0.45" },
        { nom: "Biscuit sec, sans précision", ef: "0.45" },
        { nom: "Biscuit sec nature", ef: "0.45" },
        { nom: "Biscuit sec à teneur garantie en vitamines", ef: "0.32" },
        {
          nom: "Biscuit sec à teneur garantie en vitamines et minéraux",
          ef: "0.45",
        },
        { nom: "Biscuit sec aux fruits, hyposodé", ef: "0.46" },
        {
          nom: "Biscuit sec croquant au chocolat, allégé en matière grasse",
          ef: "0.62",
        },
        {
          nom: "Biscuit sec fourré aux fruits, allégé en matière grasse",
          ef: "0.46",
        },
        { nom: "Spéculoos", ef: "0.51" },
        { nom: "Biscuit sec, avec matière grasse végétale", ef: "0.45" },
        { nom: "Biscuit sec, petits fours en assortiment", ef: "0.54" },
        { nom: "Biscuit sec petit beurre", ef: "0.34" },
        { nom: "Biscuit sec avec tablette de chocolat", ef: "0.72" },
        { nom: "Biscuit sec petit beurre au chocolat", ef: "0.62" },
        { nom: "Biscuit sec au lait", ef: "0.34" },
        {
          nom:
            "Biscuit sec croquant (ex : tuile) sans chocolat, allégé en matière grasse",
          ef: "0.87",
        },
        { nom: "Biscuit sec pour petit déjeuner", ef: "0.45" },
        {
          nom: "Biscuit sec pour petit déjeuner, allégé en sucres",
          ef: "0.45",
        },
        { nom: "Biscuit sec chocolaté, préemballé", ef: "0.62" },
        { nom: "Biscuit sec fourré à la pâte ou purée de fruits", ef: "0.46" },
        { nom: "Biscuit sec avec nappage chocolat", ef: "0.72" },
        {
          nom: "Barre biscuitée fourrée aux fruits, allégée en matière grasse",
          ef: "0.46",
        },
        { nom: "Biscuit sec pour petit déjeuner, au chocolat", ef: "0.62" },
        {
          nom:
            "Biscuit aux céréales pour petit déjeuner, enrichis en vitamines et minéraux",
          ef: "0.45",
        },
        { nom: "Biscuit sec au beurre, sablé, galette ou palet", ef: "0.26" },
        {
          nom: "Biscuit sec au beurre, sablé, galette ou palet, au chocolat",
          ef: "0.62",
        },
        { nom: "Biscuit sec chocolaté, type barquette", ef: "0.62" },
        { nom: "Biscuit sec chocolaté, type tartelette", ef: "0.62" },
        { nom: "Biscuit sec chocolaté, type galette", ef: "0.62" },
        { nom: "Biscuit sec, sablé, galette ou palet, aux fruits", ef: "0.46" },
        {
          nom:
            "Biscuit sec fourré fruits à coque (non ou légèrement chocolaté)",
          ef: "0.87",
        },
        {
          nom: "Florentin (biscuit sec sucré chocolaté aux amandes)",
          ef: "0.45",
        },
        { nom: "Biscuit pâtissier meringué", ef: "0.32" },
        { nom: "Sablé à la noix de coco", ef: "0.41" },
        { nom: "Sablé pâtissier", ef: "0.46" },
        { nom: "Sablé aux fruits (pomme, fruits rouges, etc.)", ef: "0.39" },
        { nom: "Sablé au cacao ou chocolat, au praliné ou autre", ef: "0.62" },
        {
          nom: 'Goûter sec fourré ("sandwiché") parfum lait ou vanille',
          ef: "0.62",
        },
        { nom: 'Goûter sec fourré ("sandwiché") parfum chocolat', ef: "0.62" },
        { nom: 'Goûter sec fourré ("sandwiché") parfum fruits', ef: "0.46" },
        { nom: "Gaufrette ou éventail sans fourrage", ef: "0.45" },
        { nom: "Gaufrette fourrée chocolat, préemballée", ef: "0.72" },
        {
          nom:
            "Gaufrette fourrée fruits à coque (noisette, amande, praline, etc.), chocolatée ou non, préemballée",
          ef: "0.87",
        },
        { nom: "Gaufrette, fourrée vanille, préemballée", ef: "0.45" },
        { nom: "Gaufrette fourrée, aux fruits", ef: "0.46" },
        { nom: "Cigarette", ef: "0.85" },
        { nom: "Crêpe dentelle", ef: "0.85" },
        { nom: "Crêpe dentelle au chocolat, préemballée", ef: "0.72" },
        {
          nom: "Biscuit sec aux œufs à la cuillère (cuiller) ou Boudoir",
          ef: "0.32",
        },
        {
          nom: "Biscuit sec type langue de chat ou cigarette russe",
          ef: "0.54",
        },
        { nom: "Meringue", ef: "0.33" },
        { nom: "Biscuit sec ou tuile, aux amandes", ef: "0.87" },
        { nom: "Biscuit sec type tuile, aux fruits", ef: "0.50" },
        { nom: "Madeleine traditionnelle, pur beurre", ef: "0.53" },
        { nom: "Madeleine chocolatée, préemballée", ef: "0.77" },
        { nom: "Madeleine ordinaire, préemballée", ef: "0.31" },
        { nom: "Biscuit sec feuilleté, type palmier ou autres", ef: "0.44" },
        { nom: "Palmier, artisanal", ef: "0.44" },
        { nom: "Tarte aux poires amandine", ef: "0.58" },
        { nom: "Gâteau aux amandes type financier", ef: "0.86" },
        { nom: "Mille-feuille", ef: "0.31" },
        {
          nom: "Biscuit sec (génoise) nappage aux fruits, type barquette",
          ef: "0.46",
        },
        { nom: "Biscuit sec nappé aux fruits, tartelette", ef: "0.46" },
        {
          nom: "Biscuit moelleux fourré à l'orange et enrobé de sucre glace",
          ef: "0.46",
        },
        { nom: "Cookie aux pépites de chocolat", ef: "0.48" },
        { nom: "Cône ou cornet classique, pour glace", ef: "0.45" },
        {
          nom: "Génoise sèche fourrée aux fruits et nappée de chocolat",
          ef: "0.42",
        },
        { nom: "Biscuit pour bébé", ef: "0.32" },
        { nom: "Biscuit sec pauvre en glucides", ef: "0.45" },
        { nom: "Blanquette de veau", ef: "1.52" },
        { nom: "Cassoulet, appertisé", ef: "0.13" },
        { nom: "Choucroute garnie", ef: "0.34" },
        { nom: "Choucroute, sans garniture, égouttée", ef: "0.17" },
        { nom: "Hachis Parmentier à la viande", ef: "1.17" },
        { nom: "Petit salé ou saucisse aux lentilles", ef: "0.44" },
        { nom: "Pot-au-feu", ef: "1.71" },
        { nom: "Ratatouille cuisinée", ef: "0.28" },
        { nom: "Ravioli à la viande, sauce tomate, appertisé", ef: "1.54" },
        { nom: "Soufflé au fromage", ef: "0.37" },
        { nom: "Épinards à la crème", ef: "0.30" },
        { nom: "Couscous au mouton", ef: "1.66" },
        { nom: "Paëlla", ef: "0.43" },
        { nom: "Boeuf bourguignon", ef: "2.36" },
        {
          nom: "Gratin ou cassolette de poisson et / ou fruits de mer, à cuire",
          ef: "1.41",
        },
        {
          nom: "Gratin ou cassolette de poisson et / ou fruits de mer, cuit",
          ef: "1.36",
        },
        { nom: "Couscous à la viande ou au poulet, allégé", ef: "0.38" },
        { nom: "Gratin d'aubergine", ef: "0.30" },
        { nom: "Gratin dauphinois", ef: "0.21" },
        {
          nom:
            "Poêlée de pommes de terre préfrites, lardons ou poulet, et autres, sans légumes verts",
          ef: "0.24",
        },
        { nom: "Canard en sauce (poivre vert, chasseur, etc.)", ef: "0.80" },
        { nom: "Lapin à la moutarde", ef: "0.67" },
        { nom: "Boeuf aux carottes", ef: "2.17" },
        { nom: "Potée auvergnate (chou et porc)", ef: "0.62" },
        { nom: "Endive au jambon", ef: "0.46" },
        { nom: "Saumon à l'oseille", ef: "1.32" },
        { nom: "Lasagnes ou cannelloni à la viande (bolognaise)", ef: "0.60" },
        { nom: "Pâtes à la bolognaise (spaghetti, tagliatelles…)", ef: "0.60" },
        { nom: "Poisson blanc à la bordelaise", ef: "1.21" },
        { nom: "Riz cantonais", ef: "0.35" },
        { nom: "Cordon bleu de volaille", ef: "0.76" },
        { nom: "Cassoulet au porc, appertisé", ef: "0.45" },
        { nom: "Cassoulet au canard ou oie, appertisé", ef: "0.33" },
        { nom: "Gratin de chou-fleur", ef: "0.18" },
        { nom: "Tomate farcie", ef: "0.61" },
        { nom: "Chou farci", ef: "0.63" },
        { nom: "Couscous au poisson", ef: "0.69" },
        { nom: "Samossas ou Samoussas", ef: "2.45" },
        { nom: "Ravioli chinois à la vapeur à la crevette, cuit", ef: "0.34" },
        { nom: "Chili con carne", ef: "1.90" },
        { nom: "Coq au vin", ef: "0.84" },
        { nom: "Gratin de pâtes", ef: "0.36" },
        { nom: "Moussaka", ef: "2.85" },
        { nom: "Navarin d'agneau aux légumes", ef: "3.06" },
        { nom: "Paupiette de veau", ef: "1.79" },
        { nom: "Paupiette de volaille", ef: "0.99" },
        { nom: "Couscous royal (avec plusieurs viandes)", ef: "0.47" },
        {
          nom: "Poisson blanc à la provençale ou niçoise (sauce tomate)",
          ef: "1.61",
        },
        { nom: "Lasagnes ou cannelloni aux légumes", ef: "0.31" },
        { nom: "Pâtes à la carbonara (spaghetti, tagliatelles…)", ef: "0.38" },
        { nom: "Tartiflette", ef: "0.32" },
        { nom: "Couscous au poulet", ef: "0.35" },
        { nom: "Lasagnes ou cannelloni au poisson", ef: "0.57" },
        {
          nom: "Poisson blanc à la florentine (sauce aux épinards)",
          ef: "1.46",
        },
        {
          nom:
            "Poisson blanc à la marinière (sauce aux oignons, vin blanc, moules)",
          ef: "1.21",
        },
        { nom: "Poisson blanc à la sauce moutarde", ef: "1.46" },
        {
          nom: "Poisson blanc à la parisienne (sauce aux champignons)",
          ef: "1.57",
        },
        { nom: "Poisson blanc à l'estragon", ef: "1.46" },
        { nom: "Poisson blanc sauce oseille", ef: "1.46" },
        {
          nom:
            "Pâtes fraîches farcies (ex : raviolis, ravioles du Dauphiné), au fromage, cuites",
          ef: "0.37",
        },
        { nom: "Couscous de légumes", ef: "0.13" },
        { nom: "Feuilleté au poisson et / ou fruits de mer", ef: "0.89" },
        { nom: "Couscous à la viande", ef: "0.47" },
        {
          nom:
            "Gratin de poisson et purée ou brandade aux pommes de terre ou parmentier de poisson",
          ef: "1.46",
        },
        {
          nom:
            "Pâtes fraîches farcies (ex : raviolis), au fromage et aux légumes, cuites",
          ef: "0.37",
        },
        {
          nom:
            "Pâtes fraîches farcies (ex : raviolis), à la viande (ex : bolognaise), crues",
          ef: "1.54",
        },
        {
          nom:
            "Pâtes fraîches farcies (ex : raviolis), à la viande (ex : bolognaise), cuites",
          ef: "1.54",
        },
        { nom: "Tajine de mouton", ef: "3.23" },
        { nom: "Gratin de légumes", ef: "0.30" },
        { nom: "Boeuf, boulettes cuites", ef: "3.16" },
        { nom: "Osso buco", ef: "1.44" },
        {
          nom: "Spécialité chinoise ou bouchées à la vapeur, cuite",
          ef: "0.37",
        },
        { nom: "Veau, escalope panée, cuite", ef: "1.82" },
        { nom: "Poulet au curry et au lait de coco", ef: "0.85" },
        {
          nom:
            "Pâtes fraîches farcies (ex : raviolis, ravioles du Dauphiné), au fromage, crues",
          ef: "0.37",
        },
        {
          nom:
            "Pâtes fraîches farcies (ex : raviolis), au fromage et aux légumes, crues",
          ef: "0.37",
        },
        { nom: "Nouilles sautées/poêlées aux crevettes", ef: "0.26" },
        { nom: "Riz blanc, cuit, avec poulet", ef: "0.41" },
        { nom: "Riz blanc, cuit, avec légumes et viande", ef: "0.36" },
        { nom: "Risotto, aux légumes", ef: "0.13" },
        { nom: "Risotto, aux fruits de mer", ef: "0.13" },
        { nom: "Risotto, aux fromages", ef: "0.13" },
        { nom: "Poulet basquaise", ef: "0.66" },
        { nom: "Raviolis aux légumes, sauce tomate, appertisés", ef: "0.30" },
        {
          nom: "Pâtes fraîches farcies (ex : raviolis), aux légumes, cuites",
          ef: "0.30",
        },
        { nom: "Parmentier de canard", ef: "0.62" },
        {
          nom: "Riste d'aubergines (aubergines, tomates, oignons)",
          ef: "0.28",
        },
        {
          nom: "Pâtes en sauce aux fromages (spaghetti, tagliatelles…)",
          ef: "0.37",
        },
        { nom: "Palet ou galette de légumes, préfrit, surgelé", ef: "0.19" },
        {
          nom: "Pâtes fraîches farcies (ex : ravioli), aux légumes, crues",
          ef: "0.30",
        },
        { nom: "Tajine de poulet", ef: "0.71" },
        { nom: "Porc au caramel", ef: "1.53" },
        {
          nom: "Palet ou galette de légumes, préfrit, surgelé, cuit",
          ef: "0.19",
        },
        { nom: "Boulettes au bœuf, à la sauce tomate", ef: "1.21" },
        { nom: "Paupiette de veau, cuite au four", ef: "1.79" },
        { nom: "Lasagnes ou cannelloni aux légumes, cuits", ef: "0.31" },
        {
          nom:
            "Lasagnes ou canelloni aux légumes et au fromage de chèvre, cuits",
          ef: "0.31",
        },
        { nom: "Feuilleté aux escargots", ef: "0.26" },
        { nom: "Croque-monsieur", ef: "0.54" },
        { nom: "Feuilleté ou Friand au fromage", ef: "0.55" },
        { nom: "Feuilleté ou Friand à la viande", ef: "1.46" },
        { nom: "Hot-dog", ef: "0.85" },
        { nom: "Pizza au fromage ou Pizza margherita", ef: "0.25" },
        { nom: "Quiche lorraine", ef: "0.64" },
        { nom: "Crêpe ou Galette fourrée béchamel jambon", ef: "0.52" },
        { nom: "Crêpe ou Galette fourrée béchamel jambon fromage", ef: "0.52" },
        { nom: "Crêpe ou Galette fourrée béchamel champignon", ef: "0.20" },
        {
          nom: "Bouchée à la reine, à la viande/volaille/quenelle",
          ef: "0.39",
        },
        { nom: "Hamburger, provenant de fast food", ef: "1.82" },
        { nom: "Cheeseburger, provenant de fast food", ef: "1.83" },
        { nom: "Double cheeseburger, provenant de fast food", ef: "1.37" },
        { nom: "Burger au poisson", ef: "0.21" },
        { nom: "Tarte aux légumes", ef: "0.30" },
        { nom: "Croissant au jambon", ef: "0.53" },
        { nom: "Rouleau de printemps", ef: "0.24" },
        { nom: "Nem ou Pâté impérial", ef: "0.45" },
        { nom: "Sandwich grec ou Kebab, pita, crudités", ef: "1.43" },
        { nom: "Sandwich grec ou Kebab, baguette, crudités", ef: "1.43" },
        {
          nom: "Sandwich baguette, thon, crudités (tomate, salade), mayonnaise",
          ef: "0.40",
        },
        { nom: "Accra de poisson", ef: "0.91" },
        { nom: "Sandwich panini, jambon cru, mozzarella, tomates", ef: "0.55" },
        { nom: "Pizza jambon fromage", ef: "0.43" },
        { nom: "Gougère", ef: "0.43" },
        {
          nom:
            "Brick garni (garniture : crevettes, légumes, volaille, viande, poisson, etc.)",
          ef: "0.46",
        },
        { nom: "Tarte au fromage", ef: "0.47" },
        { nom: "Tarte à la provençale", ef: "0.30" },
        { nom: "Sushi ou Maki aux produits de la mer", ef: "0.41" },
        { nom: "Pizza à la viande, type bolognaise", ef: "0.80" },
        { nom: "Burritos", ef: "0.89" },
        { nom: "Fajitas", ef: "0.36" },
        { nom: "Pizza au chorizo ou salami", ef: "0.34" },
        { nom: "Pizza aux fruits de mer", ef: "0.37" },
        { nom: "Pizza au saumon", ef: "0.37" },
        { nom: "Pizza au chèvre et lardons", ef: "0.56" },
        { nom: "Pizza aux légumes ou Pizza 4 saisons", ef: "0.38" },
        {
          nom:
            "Sandwich baguette, jambon, oeuf dur, crudités (tomate, salade), beurre",
          ef: "0.37",
        },
        {
          nom:
            "Sandwich baguette, poulet, crudités (tomate, salade), mayonnaise",
          ef: "0.45",
        },
        { nom: "Pizza champignons fromage", ef: "0.24" },
        { nom: "Pizza 4 fromages", ef: "0.47" },
        { nom: "Gnocchi à la semoule, cuit", ef: "0.12" },
        { nom: "Sandwich baguette, jambon emmental", ef: "0.59" },
        { nom: "Sandwich baguette, saumon fumé, beurre", ef: "0.29" },
        { nom: "Sandwich baguette, thon, maïs, crudités", ef: "0.29" },
        { nom: "Burger au poulet", ef: "0.60" },
        { nom: "Bouchée à la reine, au poisson et fruits de mer", ef: "1.38" },
        { nom: "Brochette de volaille", ef: "1.11" },
        { nom: "Brochette de boeuf", ef: "3.53" },
        { nom: "Brochette mixte de viande", ef: "1.02" },
        { nom: "Feuilleté ou Friand jambon fromage", ef: "0.72" },
        { nom: "Fondue savoyarde (fromages, vin, pain)", ef: "0.38" },
        { nom: "Gnocchi à la pomme de terre, cuit", ef: "0.12" },
        { nom: "Légumes farcis (sauf tomate)", ef: "0.60" },
        { nom: "Volaille, croquette panée ou nuggets", ef: "0.85" },
        { nom: "Pan bagnat", ef: "0.31" },
        { nom: "Sandwich baguette, jambon, beurre", ef: "0.65" },
        { nom: "Sandwich baguette, camembert, beurre", ef: "0.36" },
        { nom: "Sandwich baguette, pâté, cornichons", ef: "0.39" },
        { nom: "Sandwich baguette, saucisson, beurre", ef: "0.48" },
        { nom: "Sandwich baguette, jambon, emmental, beurre", ef: "0.59" },
        { nom: "Toasts ou Canapés salés, garnitures diverses", ef: "0.22" },
        { nom: "Tomate à la provençale", ef: "0.17" },
        { nom: "Pizza, sauce garniture pour", ef: "0.17" },
        { nom: "Pissaladière", ef: "0.29" },
        { nom: "Tarte à l'oignon", ef: "0.43" },
        { nom: "Sandwich baguette, crudités diverses, mayonnaise", ef: "0.31" },
        {
          nom:
            "Sandwich baguette, dinde, crudités (tomate, salade), mayonnaise",
          ef: "0.31",
        },
        {
          nom: "Sandwich baguette, oeuf, crudités (tomate, salade), mayonnaise",
          ef: "0.30",
        },
        {
          nom: "Sandwich baguette, porc, crudités (tomate, salade), mayonnaise",
          ef: "0.37",
        },
        { nom: "Sandwich baguette, merguez, ketchup moutarde", ef: "0.48" },
        { nom: "Sandwich baguette, salami, beurre", ef: "0.65" },
        { nom: "Carpaccio de saumon avec marinade", ef: "1.32" },
        { nom: "Brochette de poisson", ef: "2.34" },
        { nom: "Brochette d'agneau", ef: "6.07" },
        { nom: "Croque-madame", ef: "0.53" },
        { nom: "Sandwich pain de mie, garnitures diverses", ef: "0.37" },
        { nom: "Fromage pané au jambon", ef: "0.53" },
        { nom: "Croque-monsieur, rayon frais", ef: "0.54" },
        {
          nom:
            "Pizza jambon fromage champignons ou pizza royale, reine ou regina",
          ef: "0.34",
        },
        { nom: "Crêpe ou Galette fourrée béchamel fromage", ef: "0.28" },
        { nom: "Flammenkueche ou Tarte flambée aux lardons", ef: "0.39" },
        {
          nom: "Beignet de viande, volaille ou poisson, fait maison",
          ef: "0.85",
        },
        {
          nom: "Crêpe ou Galette fourrée béchamel jambon fromage champignon",
          ef: "0.47",
        },
        { nom: "Tarte ou Tourte aux poireaux", ef: "0.44" },
        { nom: "Tarte au saumon", ef: "0.61" },
        { nom: "Beignet de légumes", ef: "0.25" },
        { nom: "Brick à l'oeuf", ef: "0.46" },
        { nom: "Brick au boeuf", ef: "0.46" },
        { nom: "Brick à la pomme de terre", ef: "0.46" },
        { nom: "Tourte au riesling", ef: "1.56" },
        { nom: "Tarte à la tomate", ef: "0.30" },
        { nom: "Crêpe ou Galette complète (œuf, jambon, fromage)", ef: "0.52" },
        { nom: "Tarte aux noix de Saint-Jacques", ef: "0.37" },
        {
          nom: "Yakitori (brochettes japonaises grillées en sauce)",
          ef: "0.99",
        },
        { nom: "Brochette de porc, crue", ef: "0.99" },
        { nom: "Pastilla au poulet", ef: "0.72" },
        { nom: "Pizza aux lardons, oignons et fromage", ef: "0.56" },
        {
          nom: "Falafel ou Boulette de pois-chiche et/ou fève, frite",
          ef: "0.15",
        },
        { nom: "Crêpe ou Galette aux noix de St Jacques", ef: "0.35" },
        {
          nom:
            "Sandwich pain de mie complet, jambon, crudités, fromage optionnel",
          ef: "0.37",
        },
        {
          nom: "Sandwich pain de mie complet, thon, crudités, mayonnaise",
          ef: "0.40",
        },
        { nom: "Sandwich pain de mie complet, jambon, fromage", ef: "0.59" },
        {
          nom: "Sandwich pain de mie complet, poulet, crudités, mayonnaise",
          ef: "0.45",
        },
        {
          nom: "Crêpe ou Galette fourrée béchamel champignon, cuite",
          ef: "0.52",
        },
        { nom: "Nem ou Pâté impérial, au poulet, cuit", ef: "0.45" },
        { nom: "Nem ou Pâté impérial, au porc, cuit", ef: "0.45" },
        {
          nom: "Nem ou Pâté impérial, aux crevettes et/ou au crabe, cuit",
          ef: "0.45",
        },
        { nom: "Parmentier de canard, cuit", ef: "0.62" },
        {
          nom: "Gratin de légumes en sauce blanche type béchamel, cuit",
          ef: "0.18",
        },
        { nom: "Céleri rémoulade, préemballé", ef: "0.18" },
        { nom: "Salade de thon et légumes, appertisée, égouttée", ef: "0.91" },
        {
          nom: "Salade composée avec viande ou poisson, appertisée, égouttée",
          ef: "2.87",
        },
        { nom: "Salade verte, crue, sans assaisonnement", ef: "0.13" },
        { nom: "Champignon à la grecque", ef: "0.16" },
        { nom: "Salade de pommes de terre maison", ef: "0.56" },
        { nom: "Taboulé ou Salade de couscous, préemballé", ef: "0.16" },
        {
          nom: "Salade de pomme de terre à la piémontaise, préemballée",
          ef: "0.45",
        },
        { nom: "Museau de boeuf en vinaigrette", ef: "2.22" },
        { nom: "Salade de riz", ef: "0.20" },
        { nom: "Salade de pâtes, végétarienne", ef: "0.30" },
        {
          nom: "Salade de pâtes aux légumes, avec poisson ou viande",
          ef: "0.43",
        },
        { nom: "Guacamole, préemballé", ef: "0.48" },
        { nom: "Houmous", ef: "0.18" },
        { nom: "Tarte au maroilles ou Flamiche au maroilles", ef: "0.56" },
        {
          nom: "Crêpe ou Galette fourrée au poisson et / ou fruits de mer",
          ef: "0.54",
        },
        {
          nom: "Salade César au poulet (salade verte, fromage, croûtos, sauce)",
          ef: "0.37",
        },
        {
          nom: "Lasagnes ou cannelloni au fromage et aux épinards",
          ef: "0.45",
        },
        { nom: "Soupe aux lentilles, préemballée à réchauffer", ef: "0.08" },
        {
          nom: "Soupe à la volaille et aux légumes, préemballée à réchauffer",
          ef: "0.01",
        },
        {
          nom: "Soupe aux légumes variés, préemballée à réchauffer",
          ef: "0.09",
        },
        {
          nom: "Soupe de poissons et / ou crustacés, préemballée à réchauffer",
          ef: "1.24",
        },
        {
          nom: "Soupe aux légumes variés, déshydratée reconstituée",
          ef: "0.12",
        },
        {
          nom:
            "Soupe aux poireaux et pommes de terre, préemballée à réchauffer",
          ef: "0.08",
        },
        {
          nom:
            "Soupe à la volaille et aux vermicelles, préemballée à réchauffer",
          ef: "0.16",
        },
        { nom: "Soupe à l'oignon, préemballée à réchauffer", ef: "0.12" },
        { nom: "Soupe aux champignons, préemballée à réchauffer", ef: "0.20" },
        { nom: "Soupe à la carotte, préemballée à réchauffer", ef: "0.09" },
        { nom: "Soupe à la tomate, préemballée à réchauffer", ef: "0.07" },
        { nom: "Soupe chorba frik, à base de viande et de frik", ef: "0.54" },
        { nom: "Soupe minestrone, préemballée à réchauffer", ef: "0.12" },
        { nom: "Soupe au pistou, déshydratée reconstituée", ef: "0.15" },
        {
          nom: "Soupe de poissons et / ou crustacés, déshydratée reconstituée",
          ef: "1.27",
        },
        {
          nom: "Soupe asiatique, avec pâtes, déshydratée reconstituée",
          ef: "0.30",
        },
        { nom: "Soupe marocaine, déshydratée reconstituée", ef: "0.54" },
        {
          nom:
            "Soupe aux poireaux et pommes de terre, déshydratée reconstituée",
          ef: "0.11",
        },
        {
          nom: "Soupe à la volaille et aux légumes, déshydratée reconstituée",
          ef: "0.01",
        },
        { nom: "Soupe aux asperges, déshydratée reconstituée", ef: "0.15" },
        {
          nom: "Soupe à la tomate et aux vermicelles, préemballée à réchauffer",
          ef: "0.11",
        },
        {
          nom: "Soupe aux céréales et aux légumes, déshydratée reconstituée",
          ef: "0.14",
        },
        { nom: "Soupe à la tomate, déshydratée reconstituée", ef: "0.10" },
        { nom: "Soupe aux champignons, déshydratée reconstituée", ef: "0.23" },
        { nom: "Soupe à l'oignon, déshydratée reconstituée", ef: "0.15" },
        { nom: "Soupe au potiron, préemballée à réchauffer", ef: "0.15" },
        { nom: "Bouillon de légumes, déshydraté reconstitué", ef: "0.11" },
        {
          nom: "Soupe à la tomate et aux vermicelles, déshydratée reconstituée",
          ef: "0.14",
        },
        {
          nom:
            "Soupe à la volaille et aux vermicelles, déshydratée reconstituée",
          ef: "0.19",
        },
        { nom: "Soupe au pistou, préemballée à réchauffer", ef: "0.12" },
        { nom: "Soupe au potiron, déshydratée reconstituée", ef: "0.18" },
        {
          nom: "Soupe asiatique, avec pâtes, préemballée à réchauffer",
          ef: "0.27",
        },
        { nom: "Soupe minestrone, déshydratée reconstituée", ef: "0.13" },
        { nom: "Soupe au cresson, déshydratée reconstituée", ef: "0.13" },
        { nom: "Soupe au cresson, préemballée à réchauffer", ef: "0.11" },
        {
          nom: "Soupe aux légumes avec fromage, préemballée à réchauffer",
          ef: "0.16",
        },
        {
          nom: "Soupe aux légumes verts, préemballée à réchauffer",
          ef: "0.08",
        },
        {
          nom: "Soupe aux légumes verts, déshydratée reconstituée",
          ef: "0.10",
        },
        { nom: "Soupe aux pois cassés, préemballée à réchauffer", ef: "0.08" },
        { nom: "Soupe froide type Gaspacho ou Gazpacho", ef: "0.07" },
        { nom: "Soupe aux asperges, préemballée à réchauffer", ef: "0.12" },
        { nom: "Hareng fumé, filet, doux", ef: "0.30" },
        {
          nom: "Anchois, filets roulés aux câpres, semi-conserve, égoutté",
          ef: "0.26",
        },
        {
          nom: "Anchois, filets à l'huile, semi-conserve, égoutté",
          ef: "0.26",
        },
        { nom: "Bar rayé ou bar d'Amérique, cru", ef: "1.88" },
        { nom: "Carrelet ou plie, pané, frit", ef: "2.29" },
        { nom: "Carrelet ou plie, cuit à la vapeur", ef: "2.31" },
        { nom: "Lieu ou colin d'Alaska, cru", ef: "1.87" },
        { nom: "Églefin, cuit à la vapeur", ef: "2.31" },
        { nom: "Flétan de l'Atlantique ou flétan blanc, cru", ef: "0.70" },
        { nom: "Hareng mariné ou rollmops", ef: "0.30" },
        { nom: "Hareng, cru", ef: "0.30" },
        { nom: "Hareng, frit", ef: "0.37" },
        { nom: "Hareng fumé, au naturel", ef: "0.17" },
        { nom: "Hareng, grillé/poêlé", ef: "0.37" },
        { nom: "Lieu noir, cuit", ef: "1.21" },
        { nom: "Limande-sole, panée, frite", ef: "2.29" },
        { nom: "Limande-sole, cuite à la vapeur", ef: "2.31" },
        { nom: "Lotte ou baudroie, crue", ef: "1.87" },
        { nom: "Maquereau, rôti/cuit au four", ef: "0.38" },
        { nom: "Maquereau, frit", ef: "0.36" },
        { nom: "Merlan, frit", ef: "2.29" },
        { nom: "Merlan, cuit à la vapeur", ef: "2.31" },
        { nom: "Cabillaud, rôti/cuit au four", ef: "2.31" },
        { nom: "Morue, salée, bouillie/cuite à l'eau", ef: "2.31" },
        { nom: "Cabillaud, cuit à la vapeur", ef: "2.31" },
        { nom: "Mulet, rôti/cuit au four", ef: "2.31" },
        { nom: "Pilchard, sauce tomate, appertisé, égoutté", ef: "0.52" },
        { nom: "Poisson, croquette ou beignet ou nuggets, frit", ef: "1.39" },
        { nom: "Poisson pané, surgelé, cru", ef: "1.40" },
        { nom: "Poisson pané, frit", ef: "1.44" },
        { nom: "Raie, rôtie/cuite au four", ef: "2.31" },
        {
          nom: "Roussette ou petite roussette ou saumonette, cuite",
          ef: "2.31",
        },
        { nom: "Sardine, à l'huile, appertisée, égouttée", ef: "0.55" },
        { nom: "Sardine, sauce tomate, appertisée, égouttée", ef: "0.52" },
        { nom: "Saumon, cru, élevage", ef: "1.30" },
        { nom: "Saumon fumé", ef: "1.31" },
        { nom: "Saumon, cuit à la vapeur", ef: "1.62" },
        { nom: "Thon, au naturel, appertisé, égoutté", ef: "1.13" },
        { nom: "Sardine, à l'huile d'olive, appertisée, égouttée", ef: "0.55" },
        { nom: "Thon, rôti/cuit au four", ef: "0.90" },
        { nom: "Turbot sauvage, cru", ef: "1.55" },
        { nom: "Cabillaud, cru", ef: "1.87" },
        { nom: "Merlu, cru", ef: "1.13" },
        { nom: "Surimi, bâtonnets, tranche ou râpé saveur crabe", ef: "0.17" },
        { nom: "Lieu noir, surgelé, cru", ef: "0.68" },
        { nom: "Merlu, filet, surgelé, cru", ef: "1.18" },
        { nom: "Maquereau, cru", ef: "0.29" },
        { nom: "Raie, crue", ef: "1.87" },
        { nom: "Thon, cru", ef: "0.72" },
        { nom: "Poisson en sauce, surgelé", ef: "1.41" },
        { nom: "Limande, crue", ef: "1.87" },
        { nom: "Sole, crue", ef: "1.31" },
        { nom: "Sole, cuite à la vapeur", ef: "1.63" },
        { nom: "Sole, rôtie/cuite au four", ef: "1.31" },
        { nom: "Sole, bouillie/cuite à l'eau", ef: "1.63" },
        { nom: "Sole, frite", ef: "1.60" },
        { nom: "Rascasse, crue", ef: "1.87" },
        { nom: "Thon albacore ou thon jaune, cru", ef: "0.72" },
        { nom: "Sardine, crue", ef: "0.24" },
        { nom: "Thon listao ou Bonite à ventre rayé, cru", ef: "0.71" },
        { nom: "Thon à l'huile, appertisé, égoutté", ef: "1.41" },
        { nom: "Bar commun ou loup, cru, sans précision", ef: "1.88" },
        { nom: "Raie, cuite au court-bouillon", ef: "2.31" },
        {
          nom: "Roussette ou petite roussette ou saumonette, crue",
          ef: "1.87",
        },
        { nom: "Bar ou loup de l'Atlantique, cru", ef: "1.88" },
        { nom: "Thon germon ou thon blanc, cru", ef: "1.47" },
        {
          nom: "Thon germon ou thon blanc, cuit à la vapeur sous pression",
          ef: "1.82",
        },
        { nom: "Anchois commun, cru", ef: "0.29" },
        {
          nom: "Dorade royale, ou daurade ou vraie daurade, crue, sauvage",
          ef: "1.55",
        },
        { nom: "Lotte ou baudroie, grillée/poêlée", ef: "2.31" },
        { nom: "Espadon, cru", ef: "0.70" },
        { nom: "Éperlan, cru", ef: "0.24" },
        { nom: "Cardine franche, crue", ef: "1.87" },
        { nom: "Rouget-barbet de roche, cru", ef: "1.31" },
        {
          nom: "Maquereau, filet sauce tomate, appertisé, égoutté",
          ef: "0.48",
        },
        { nom: "Maquereau, fumé", ef: "0.29" },
        {
          nom: "Dorade royale ou daurade ou vraie daurade, crue, élevage",
          ef: "1.88",
        },
        { nom: "Haddock (fumé) ou églefin fumé", ef: "1.87" },
        { nom: "Mulet, cru", ef: "1.87" },
        { nom: "Truite de mer, crue", ef: "1.36" },
        { nom: "Espadon, rôti/cuit au four", ef: "0.89" },
        { nom: "Turbot, rôti/cuit au four", ef: "2.33" },
        { nom: "Merlan, cru", ef: "1.87" },
        {
          nom: "Maquereau, filet sauce moutarde, appertisé, égoutté",
          ef: "0.48",
        },
        {
          nom: "Maquereau, filet au vin blanc, appertisé, égoutté",
          ef: "0.48",
        },
        { nom: "Morue, salée, sèche", ef: "1.87" },
        { nom: "Dorade grise, ou daurade grise, ou griset, crue", ef: "1.31" },
        { nom: "Bogue, crue", ef: "0.16" },
        { nom: "Bonite, crue", ef: "1.47" },
        {
          nom: "Maquereau espagnol ou maquereau blanc ou billard, cru",
          ef: "0.29",
        },
        { nom: "Denté, cru", ef: "1.87" },
        { nom: "Saint-Pierre, cru", ef: "1.87" },
        { nom: "Grondin, cru", ef: "1.31" },
        { nom: "Corb, cru", ef: "0.70" },
        { nom: "Capelan, cru", ef: "1.47" },
        { nom: "Dorade rose, ou daurade rose, crue", ef: "1.31" },
        { nom: "Rouget-barbet de roche, vapeur", ef: "1.63" },
        { nom: "Saupe, crue", ef: "1.31" },
        { nom: "Chinchard, cru", ef: "0.29" },
        { nom: "Saumon, appertisé, égoutté", ef: "1.89" },
        { nom: "Merlu, cuit à l'étouffée", ef: "1.40" },
        { nom: "Églefin, cru", ef: "1.87" },
        { nom: "Maquereau, au naturel, appertisé, égoutté", ef: "0.64" },
        { nom: "Merlan, pané", ef: "2.31" },
        { nom: "Églefin, grillé/poêlé", ef: "2.29" },
        { nom: "Congre, cru", ef: "1.87" },
        { nom: "Grenadier (de roche), cru", ef: "1.87" },
        { nom: "Lieu jaune ou colin, cru", ef: "1.87" },
        { nom: "Julienne ou Lingue, crue", ef: "1.87" },
        { nom: "Tacaud, cru", ef: "1.87" },
        { nom: "Lieu noir, cru", ef: "0.97" },
        { nom: "Limande-sole, crue", ef: "1.87" },
        { nom: "Sardine, grillée", ef: "0.32" },
        { nom: "Vivaneau, cru", ef: "0.70" },
        { nom: "Vivaneau, cuit", ef: "0.89" },
        { nom: "Rascasse, cuite à la vapeur", ef: "2.31" },
        { nom: "Lieu ou colin d'Alaska, fumé", ef: "1.87" },
        { nom: "Sabre, cru", ef: "1.87" },
        {
          nom: "Flétan du Groënland ou flétan noir ou flétan commun, cru",
          ef: "1.87",
        },
        { nom: "Carangue, cru", ef: "0.70" },
        { nom: "Coulirou, cru", ef: "0.29" },
        { nom: "Requin, cru", ef: "1.87" },
        { nom: "Orphie commune, crue", ef: "0.24" },
        { nom: "Brème, cru", ef: "1.88" },
        { nom: "Omble chevalier, cru", ef: "3.08" },
        { nom: "Loup tacheté, cru", ef: "1.87" },
        { nom: "Sprat, cru", ef: "0.24" },
        { nom: "Turbot, cru", ef: "1.88" },
        { nom: "Anchois au sel (anchoité, semi-conserve)", ef: "0.29" },
        { nom: "Mérou, cru", ef: "0.70" },
        {
          nom:
            "Thon germon ou thon blanc, à l'huile d'olive, appertisé, égoutté",
          ef: "2.61",
        },
        {
          nom: "Thon albacore ou thon jaune, au naturel, appertisé, égoutté",
          ef: "1.30",
        },
        { nom: "Maquereau, mariné", ef: "0.29" },
        { nom: "Anchois commun, mariné", ef: "0.27" },
        { nom: "Lingue bleue ou Lingue, crue", ef: "1.87" },
        { nom: "Sole tropicale ou Sole langue, crue", ef: "1.31" },
        { nom: "Turbot d'élevage, cru", ef: "1.88" },
        { nom: "Plie commune, crue", ef: "1.87" },
        { nom: "Bar commun ou loup (Méditerranée), cru, sauvage", ef: "1.55" },
        { nom: "Bar commun ou loup (Méditerranée), cru, élevage", ef: "1.88" },
        {
          nom: "Sébaste du nord, ou dorade sébaste, ou daurade sébaste, crue",
          ef: "1.87",
        },
        { nom: "Saumon, cuit au micro-ondes, élevage", ef: "1.59" },
        { nom: "Hoki, tout lieu de pêche, cru", ef: "1.87" },
        { nom: "Grenadier bleu ou hoki de Nouvelle-Zélande, cru", ef: "1.13" },
        { nom: "Saumon, bouilli/cuit à l'eau, élevage", ef: "1.62" },
        { nom: "Grondin perlon, cru", ef: "1.87" },
        {
          nom: "Dorade grise, ou daurade grise, ou griset, rôtie/cuite au four",
          ef: "1.63",
        },
        { nom: "Saumon, grillé/poêlé", ef: "1.60" },
        { nom: "Saumon, élevage, rôti/cuit au four", ef: "1.62" },
        {
          nom:
            "Sardine, filets sans arêtes à l'huile d'olive, appertisés, égouttés",
          ef: "0.69",
        },
        { nom: "Hareng fumé, à l'huile", ef: "0.30" },
        { nom: "Merlu blanc du Cap, surgelé, cru", ef: "1.13" },
        { nom: "Julienne ou Lingue, cuite", ef: "2.31" },
        { nom: "Chinchard maigre, cru", ef: "0.29" },
        { nom: "Chinchard gras, cru", ef: "0.29" },
        { nom: "Hareng maigre, cru", ef: "0.30" },
        { nom: "Hareng gras, cru", ef: "0.30" },
        { nom: "Surimi, fourré au fromage", ef: "0.17" },
        {
          nom: "Joëls (petits poissons entiers) pour friture, crus",
          ef: "0.16",
        },
        { nom: "Empereur, filet, sans peau, cru", ef: "1.87" },
        { nom: "Miettes de thon à la tomate, appertisées", ef: "1.41" },
        {
          nom: "Thon, à la catalane ou à l'escabèche (sauce tomate), appertisé",
          ef: "1.14",
        },
        {
          nom:
            "Rouget-barbet, filet avec peau, surgelé, cru (Thaïlande, Sénégal…)",
          ef: "0.83",
        },
        { nom: "Miettes de thon à l'huile, appertisées", ef: "1.41" },
        {
          nom:
            "Flétan du Groënland ou flétan noir ou flétan commun, cuit à la vapeur",
          ef: "2.31",
        },
        { nom: "Sole, poêlée", ef: "1.63" },
        { nom: "Ficelle picarde", ef: "1.14" },
        {
          nom: "Salade de chou ou Coleslaw, avec sauce, préemballée",
          ef: "0.17",
        },
        { nom: "Gnocchi à la pomme de terre, cru", ef: "0.09" },
        { nom: "Gnocchi à la semoule, cru", ef: "0.09" },
        { nom: "Croissant au jambon fromage", ef: "0.53" },
        { nom: "Tarte épinard chèvre", ef: "0.56" },
        { nom: "Tielle sétoise", ef: "0.47" },
        {
          nom: "Taboulé ou Salade de couscous au poulet, préemballé",
          ef: "0.29",
        },
        { nom: "Pizza au thon", ef: "0.37" },
        { nom: "Pizza kebab", ef: "0.43" },
        { nom: "Pizza au poulet", ef: "0.43" },
        { nom: "Pizza type raclette ou tartiflette", ef: "0.56" },
        { nom: "Pizza au speck ou jambon cru", ef: "0.43" },
        { nom: "Carpe, crue, élevage", ef: "1.36" },
        { nom: "Carpe, rôtie/cuite au four", ef: "1.69" },
        { nom: "Perche, rôtie/cuite au four", ef: "3.79" },
        { nom: "Truite, rôtie/cuite au four", ef: "1.69" },
        { nom: "Truite, cuite à la vapeur", ef: "1.69" },
        { nom: "Truite d'élevage, crue", ef: "1.36" },
        { nom: "Truite arc en ciel, crue, élevage", ef: "1.36" },
        { nom: "Perche, crue", ef: "3.08" },
        { nom: "Truite arc en ciel, élevage, rôtie/cuite au four", ef: "1.69" },
        { nom: "Truite arc en ciel, élevage, cuite à la vapeur", ef: "1.69" },
        { nom: "Pangasius ou Poisson-chat, cru", ef: "1.88" },
        {
          nom: "Panga, Pangasius, ou poisson-chat du Mékong, filet, cuit",
          ef: "5.41",
        },
        { nom: "Truite saumonée, crue", ef: "1.36" },
        { nom: "Perche du Nil, crue", ef: "1.36" },
        { nom: "Truite d'élevage, fumée", ef: "1.36" },
        { nom: "Bar commun ou loup, rôti/cuit au four", ef: "2.33" },
        { nom: "Porc, épaule, crue", ef: "1.18" },
        { nom: "Porc, poitrine, crue", ef: "1.46" },
        { nom: "Porc, longe, crue", ef: "1.46" },
        { nom: "Porc, jarret, cru", ef: "1.47" },
        { nom: "Porc, longe, cuite", ef: "1.88" },
        { nom: "Porc, épaule, cuite", ef: "1.52" },
        { nom: "Porc, côte, crue", ef: "1.47" },
        { nom: "Porc, côte, grillée", ef: "1.89" },
        { nom: "Porc, rouelle de jambon, crue", ef: "1.46" },
        { nom: "Porc, rouelle de jambon, cuite", ef: "1.88" },
        { nom: "Porc, carré, cru", ef: "1.47" },
        { nom: "Porc, carré, cuit", ef: "1.89" },
        { nom: "Porc, filet, maigre, cru", ef: "1.46" },
        { nom: "Porc, filet, maigre, en rôti, cuit", ef: "1.88" },
        { nom: "Porc, filet mignon, cuit", ef: "1.88" },
        { nom: "Porc, filet mignon, cru", ef: "1.46" },
        { nom: "Porc, rôti, cru", ef: "1.46" },
        { nom: "Porc, rôti, cuit", ef: "1.88" },
        { nom: "Porc, échine, crue", ef: "1.46" },
        { nom: "Porc, travers, cru", ef: "1.47" },
        { nom: "Porc, travers, braisé", ef: "1.89" },
        { nom: "Porc, échine, rôtie/cuite au four", ef: "1.88" },
        { nom: "Porc, escalope de jambon, crue", ef: "1.46" },
        { nom: "Porc, escalope de jambon, cuite", ef: "1.88" },
        { nom: "Porc, bardière découennée, crue", ef: "0.21" },
        { nom: "Porc, gorge, découennée, crue", ef: "0.85" },
        {
          nom:
            "Porc, hachage sans jarret, sans bateau, découenné, dégraisssé, désossé, cru",
          ef: "1.46",
        },
        {
          nom:
            "Porc, jambon sans jarret, sans bateau, découenné, dégraisssé, désossé, cru",
          ef: "1.83",
        },
        {
          nom: "Porc, jambonneau arrière, découenné, dégraisssé, désossé, cru",
          ef: "1.47",
        },
        { nom: "Porc, maigre 90/10, cru", ef: "1.46" },
        { nom: "Porc, maigre 80/20, cru", ef: "1.46" },
        {
          nom: "Porc, palette, découennée, dégraisssée, désossée, crue",
          ef: "1.46",
        },
        { nom: "Porc, couenne, crue", ef: "0.21" },
        { nom: "Porc, poitrine cutter, sans mouille, crue", ef: "0.85" },
        { nom: "Porc, rôti filet avec chaînette, cru", ef: "1.46" },
        { nom: "Lardon nature, cru", ef: "0.85" },
        { nom: "Poitrine de porc, fumée, crue", ef: "0.85" },
        { nom: "Bresaola", ef: "1.92" },
        { nom: "Lardon nature, cuit", ef: "1.10" },
        { nom: "Oreille de porc demi-sel", ef: "0.37" },
        { nom: "Pied de porc demi-sel", ef: "0.46" },
        { nom: "Poitrine de porc demi-sel", ef: "1.10" },
        {
          nom: "Jambon de porc à cuire ou Jambon à rôtir/cuire au four",
          ef: "0.95",
        },
        { nom: "Lardon fumé, cru", ef: "0.85" },
        { nom: "Lardon fumé, cuit", ef: "1.10" },
        { nom: "Filet de bacon", ef: "0.96" },
        { nom: "Jambon cru", ef: "1.92" },
        { nom: "Jambon cru, fumé", ef: "1.92" },
        { nom: "Jambon sec, découenné, dégraissé", ef: "2.41" },
        { nom: "Jambon cuit, fumé", ef: "0.95" },
        { nom: "Jambon cru, fumé, allégé en matière grasse", ef: "1.92" },
        { nom: "Jambon de Bayonne", ef: "1.92" },
        { nom: "Jambon sec", ef: "2.41" },
        { nom: "Jambon sec de Parme", ef: "2.41" },
        { nom: "Jambon sec Serrano", ef: "2.41" },
        { nom: "Coppa", ef: "2.41" },
        { nom: "Pancetta ou Poitrine roulée sèche", ef: "2.41" },
        { nom: "Jambon cuit, supérieur", ef: "0.95" },
        { nom: "Jambon cuit, supérieur, avec couenne", ef: "0.95" },
        { nom: "Jambon cuit, supérieur, découenné", ef: "0.95" },
        { nom: "Jambon à l'os braisé", ef: "1.20" },
        { nom: "Jambon cuit, supérieur, découenné dégraissé", ef: "0.95" },
        { nom: "Jambon cuit, supérieur, à teneur réduite en sel", ef: "0.95" },
        { nom: "Jambon cuit, choix", ef: "0.95" },
        {
          nom: "Épaule de porc, cuite, choix, découennée dégraissée",
          ef: "0.95",
        },
        { nom: "Jambon cuit, choix, avec couenne", ef: "0.95" },
        { nom: "Jambon cuit, choix, découenné dégraissé", ef: "0.95" },
        { nom: "Rond de jambon cuit", ef: "1.20" },
        { nom: "Dés, allumettes, râpé ou haché de jambon", ef: "0.95" },
        {
          nom: "Épaule de porc, cuite, standard, découennée dégraissée",
          ef: "0.95",
        },
        { nom: "Jambon cuit, de Paris, découenné dégraissé", ef: "0.95" },
        { nom: "Haché de volaille", ef: "1.11" },
        {
          nom: "Dés, allumettes, râpé ou haché de jambon de volaille",
          ef: "0.82",
        },
        { nom: "Jambonneau, cuit", ef: "1.20" },
        { nom: "Jambon de poulet ou Blanc de poulet en tranche", ef: "0.82" },
        { nom: "Jambon de dinde ou Blanc de dinde en tranche", ef: "0.82" },
        { nom: "Rôti de volaille en salaison, cuit", ef: "1.11" },
        { nom: "Chipolata, cuite", ef: "1.77" },
        { nom: "Saucisse de Toulouse, cuite", ef: "2.12" },
        { nom: "Chair à saucisse, crue", ef: "1.24" },
        { nom: "Chair à saucisse, pur porc, crue", ef: "1.31" },
        { nom: "Chair à saucisse, porc et bœuf, crue", ef: "1.31" },
        { nom: "Saucisse de Morteau", ef: "1.14" },
        { nom: "Saucisse de Montbéliard", ef: "1.14" },
        { nom: "Saucisse de Morteau, bouillie/cuite à l'eau", ef: "1.14" },
        { nom: "Saucisse de Toulouse, crue", ef: "2.06" },
        { nom: "Chipolata, crue", ef: "1.31" },
        { nom: "Saucisse suisse à cuire", ef: "1.14" },
        { nom: "Saucisse alsacienne fumée ou Gendarme", ef: "1.14" },
        { nom: "Saucisse de volaille, façon charcutière", ef: "1.53" },
        { nom: "Saucisse de volaille, type Knack", ef: "1.67" },
        { nom: "Saucisse de Francfort", ef: "1.36" },
        { nom: "Merguez, crue", ef: "2.69" },
        { nom: "Merguez, pur bœuf, crue", ef: "3.04" },
        { nom: "Merguez, porc et bœuf, crue", ef: "2.69" },
        { nom: "Merguez, bœuf, mouton et porc, crue", ef: "3.48" },
        { nom: "Merguez, boeuf et mouton, cuite", ef: "4.29" },
        { nom: "Merguez, boeuf et mouton, crue", ef: "4.26" },
        { nom: "Saucisse de foie", ef: "1.16" },
        { nom: "Diot, cru", ef: "1.31" },
        { nom: "Saucisson sec", ef: "0.84" },
        { nom: "Saucisson sec pur porc", ef: "0.84" },
        { nom: "Saucisson sec pur porc, qualité supérieure", ef: "0.84" },
        { nom: "Rosette ou Fuseau", ef: "0.84" },
        { nom: "Saucisse sèche", ef: "0.85" },
        { nom: "Saucisson sec aux noix et/ou noisettes", ef: "0.85" },
        { nom: "Chorizo", ef: "0.87" },
        {
          nom: "Chorizo supérieur, doux ou fort, type saucisse sèche",
          ef: "0.84",
        },
        {
          nom: "Chorizo supérieur, doux ou fort, type charcuterie en tranches",
          ef: "0.87",
        },
        { nom: "Salami", ef: "0.84" },
        { nom: "Salami pur porc", ef: "0.84" },
        { nom: "Salami porc et boeuf", ef: "0.85" },
        { nom: "Salami type danois", ef: "0.84" },
        { nom: "Saucisson à l'ail", ef: "1.46" },
        { nom: "Saucisson cuit pur porc", ef: "1.09" },
        { nom: "Saucisson de Paris", ef: "0.87" },
        { nom: "Saucisson de Paris, fumé", ef: "0.87" },
        { nom: "Saucisson brioché, cuit", ef: "0.67" },
        { nom: "Cervelas", ef: "1.83" },
        { nom: "Cervelas obernois", ef: "1.36" },
        { nom: "Cervelas à l'ail, pur porc", ef: "1.36" },
        { nom: "Saucisse de Strasbourg ou Knack", ef: "1.42" },
        { nom: "Saucisse cocktail", ef: "1.42" },
        { nom: "Saucisse viennoise, crue", ef: "2.06" },
        { nom: "Saucisse de jambon pur porc", ef: "1.36" },
        { nom: "Saucisse de bière", ef: "1.36" },
        { nom: "Mortadelle", ef: "1.30" },
        { nom: "Mortadelle, pur porc", ef: "1.30" },
        { nom: "Mortadelle, porc et boeuf", ef: "1.30" },
        { nom: "Mortadelle pistachée pur porc", ef: "1.30" },
        { nom: "Barre chocolatée biscuitée", ef: "0.68" },
        { nom: "Barre chocolatée non biscuitée enrobée", ef: "0.58" },
        { nom: "Barre à la noix de coco, enrobée de chocolat", ef: "0.41" },
        { nom: "Bonbons, tout type", ef: "0.92" },
        { nom: "Chocolat au lait, tablette", ef: "1.28" },
        {
          nom: "Chocolat noir à moins de 70% de cacao, à croquer, tablette",
          ef: "1.29",
        },
        { nom: "Miel", ef: "0.26" },
        {
          nom: "Chocolat au lait aux céréales croustillantes, tablette",
          ef: "1.28",
        },
        { nom: "Chocolat blanc, tablette", ef: "1.30" },
        { nom: "Barres ou confiserie chocolatées au lait", ef: "0.67" },
        { nom: "Sorbet, bâtonnet", ef: "0.47" },
        { nom: "Pâte de fruits", ef: "0.45" },
        { nom: "Sucre blanc", ef: "0.15" },
        { nom: "Sucre roux", ef: "0.27" },
        {
          nom:
            "Chocolat au lait aux fruits secs (noisettes, amandes, raisins, praline), tablette",
          ef: "1.28",
        },
        {
          nom:
            "Chocolat au lait sans sucres ajoutés, avec édulcorants, tablette",
          ef: "1.28",
        },
        { nom: "Confiture de fraise (extra ou classique)", ef: "0.55" },
        {
          nom:
            "Chocolat blanc aux fruits secs (noisettes, amandes, raisins, praliné) , tablette",
          ef: "1.32",
        },
        {
          nom:
            "Chocolat noir sans sucres ajoutés, avec édulcorants, en tablette",
          ef: "1.29",
        },
        { nom: "Pâte à tartiner chocolat et noisette", ef: "0.74" },
        { nom: "Nougat ou touron", ef: "0.91" },
        { nom: "Barre glacée chocolatée", ef: "0.28" },
        { nom: "Dragée amande", ef: "0.92" },
        { nom: "Confiture d'abricot (extra ou classique)", ef: "0.22" },
        { nom: "Confiture de cerise (extra ou classique)", ef: "0.54" },
        { nom: "Marmelade d'orange", ef: "0.21" },
        { nom: "Confiture de lait", ef: "0.24" },
        { nom: "Confiserie au chocolat dragéifiée", ef: "1.21" },
        { nom: "Cacahuètes enrobées de chocolat dragéifiées", ef: "1.21" },
        { nom: "Sucre vanillé", ef: "0.15" },
        { nom: "Guimauve ou marshmallow", ef: "0.20" },
        { nom: "Bonbon dur et sucette", ef: "0.92" },
        { nom: "Bonbon gélifié", ef: "0.92" },
        { nom: "Confiture de framboise (extra ou classique)", ef: "0.42" },
        {
          nom: "Bouchée chocolat fourrage fruits à coques et/ou praliné",
          ef: "1.21",
        },
        { nom: "Édulcorant à la saccharine", ef: "0.15" },
        { nom: "Rocher chocolat fourré praliné", ef: "1.21" },
        { nom: "Mélasse de canne", ef: "0.26" },
        {
          nom: "Chocolat noir aux fruits (orange, framboise, poire), tablette",
          ef: "0.41",
        },
        {
          nom:
            "Chocolat noir aux fruits secs (noisettes, amandes, raisins, praline), tablette",
          ef: "1.29",
        },
        { nom: "Barre chocolatée aux fruits secs", ef: "0.41" },
        { nom: "Chocolat noir fourrage confiseur à la menthe", ef: "1.29" },
        { nom: "Barre goûter frais au lait et chocolat", ef: "0.67" },
        {
          nom:
            "Chocolat noir à 70% cacao minimum, extra, dégustation, tablette",
          ef: "1.29",
        },
        { nom: "Fructose", ef: "0.21" },
        { nom: "Chocolat au lait fourré", ef: "1.28" },
        { nom: "Chocolat noir fourré praliné, tablette", ef: "1.29" },
        { nom: "Bonbon au caramel, mou", ef: "0.92" },
        { nom: "Chocolat au lait fourré au praliné, tablette", ef: "1.28" },
        {
          nom: "Chocolat noir à 40% de cacao minimum, à pâtisser, tablette",
          ef: "1.29",
        },
        {
          nom: "Bonbon / bouchée au chocolat fourrage gaufrettes / biscuit",
          ef: "1.21",
        },
        { nom: "Calissons d'Aix en Provence", ef: "0.13" },
        { nom: "Barre chocolat au lait avec nougat", ef: "0.41" },
        {
          nom: "Barre goûter frais au lait et chocolat avec génoise",
          ef: "0.67",
        },
        {
          nom:
            "Barre céréalière pour petit déjeuner au lait, chocolatée ou non, enrichie en vitamines et minéraux",
          ef: "0.62",
        },
        {
          nom:
            'Barre céréalière "équilibre" aux fruits, enrichie en vitamines et minéraux',
          ef: "0.47",
        },
        {
          nom:
            'Barre céréalière "équilibre" chocolatée, enrichie en vitamines et minéraux',
          ef: "0.62",
        },
        { nom: "Barre céréalière chocolatée", ef: "0.62" },
        {
          nom:
            "Confiture, tout type de fruits, allégée en sucres (extra ou classique)",
          ef: "0.55",
        },
        { nom: "Barre céréalière aux fruits", ef: "0.47" },
        { nom: "Barre céréalière aux amandes ou noisettes", ef: "0.87" },
        {
          nom:
            "Grains de blé soufflés au miel ou caramel, enrichis en vitamines et minéraux",
          ef: "0.43",
        },
        {
          nom:
            "Céréales pour petit déjeuner chocolatées, non fourrées, enrichies en vitamines et minéraux",
          ef: "0.42",
        },
        {
          nom:
            "Céréales pour petit déjeuner riches en fibres, avec ou sans fruits, enrichies en vitamines et minéraux",
          ef: "0.43",
        },
        {
          nom: "Pétales de maïs natures, enrichis en vitamines et minéraux",
          ef: "0.43",
        },
        {
          nom:
            "Céréales pour petit déjeuner riches en fibres, au chocolat, enrichies en vitamines et minéraux",
          ef: "0.42",
        },
        {
          nom: "Pétales de blé chocolatés, enrichis en vitamines et minéraux",
          ef: "0.42",
        },
        {
          nom:
            "Pétales de blé chocolatés (non enrichis en vitamines et minéraux)",
          ef: "0.42",
        },
        {
          nom:
            "Céréales chocolatées pour petit déjeuner, non fourrées, (non enrichies en vitamines et minéraux)",
          ef: "0.42",
        },
        {
          nom:
            "Pétales de maïs natures (non enrichis en vitamines et minéraux)",
          ef: "0.43",
        },
        {
          nom:
            "Céréales pour petit déjeuner fourrées au chocolat ou chocolat-noisettes, enrichies en vitamines et minéraux",
          ef: "0.42",
        },
        {
          nom:
            "Céréales pour petit déjeuner fourrées au chocolat ou chocolat-noisettes",
          ef: "0.42",
        },
        {
          nom:
            "Céréales pour petit déjeuner fourrées, fourrage autre que chocolat, enrichies en vitamines et minéraux",
          ef: "0.42",
        },
        {
          nom:
            'Céréales pour petit déjeuner "équilibre" nature ou au miel, enrichies en vitamines et minéraux',
          ef: "0.43",
        },
        {
          nom:
            'Céréales pour petit déjeuner "équilibre" au chocolat, enrichies en vitamines et minéraux',
          ef: "0.42",
        },
        {
          nom:
            'Céréales pour petit déjeuner "équilibre" aux fruits, enrichies en vitamines et minéraux',
          ef: "0.43",
        },
        {
          nom:
            'Céréales pour petit déjeuner "équilibre" aux fruits secs (à coque), enrichis en vitamines et minéraux',
          ef: "0.43",
        },
        {
          nom:
            'Céréales pour petit déjeuner "équilibre" au chocolat (non enrichies en vitamines et minéraux)',
          ef: "0.42",
        },
        {
          nom:
            'Céréales pour petit déjeuner "équilibre" aux fruits (non enrichies en vitamines et minéraux)',
          ef: "0.43",
        },
        {
          nom:
            'Céréales pour petit déjeuner "équilibre" nature (non enrichies en vitamines et minéraux)',
          ef: "0.43",
        },
        {
          nom:
            "Pétales de maïs glacés au sucre (non enrichis en vitamines et minéraux)",
          ef: "0.43",
        },
        {
          nom:
            "Muesli croustillant aux fruits et/ou fruits secs, graines (non enrichi en vitamines et minéraux)",
          ef: "0.19",
        },
        {
          nom:
            "Muesli croustillant au chocolat (non enrichi en vitamines et minéraux)",
          ef: "0.19",
        },
        {
          nom:
            "Muesli floconneux aux fruits ou fruits secs, enrichi en vitamines et minéraux",
          ef: "0.19",
        },
        {
          nom:
            "Muesli croustillant aux fruits ou fruits secs, enrichi en vitamines et minéraux",
          ef: "0.19",
        },
        {
          nom:
            "Muesli croustillant au chocolat, avec ou sans fruits, enrichi en vitamines et minéraux",
          ef: "0.19",
        },
        {
          nom:
            "Muesli floconneux aux fruits ou fruits secs, sans sucres ajoutés",
          ef: "0.19",
        },
        {
          nom:
            "Grains de blé soufflés chocolatés, enrichis en vitamines et minéraux",
          ef: "0.42",
        },
        {
          nom:
            "Céréales pour petit déjeuner très riches en fibres, enrichies en vitamines et minéraux",
          ef: "0.43",
        },
        {
          nom:
            "Pétales de maïs glacés au sucre, enrichis en vitamines et minéraux",
          ef: "0.43",
        },
        {
          nom:
            "Pétales de blé avec noix, noisettes ou amandes, enrichis en vitamines et minéraux",
          ef: "0.43",
        },
        { nom: "Muesli floconneux ou de type traditionnel", ef: "0.19" },
        {
          nom:
            "Boules de maïs soufflées au miel (non enrichies en vitamines et minéraux)",
          ef: "0.43",
        },
        {
          nom:
            "Boules de maïs soufflées au miel, enrichies en vitamines et minéraux",
          ef: "0.43",
        },
        {
          nom:
            "Céréales complètes soufflées, enrichies en vitamines et minéraux",
          ef: "0.43",
        },
        {
          nom:
            "Multi-céréales soufflées ou extrudées, enrichies en vitamines et minéraux",
          ef: "0.43",
        },
        {
          nom:
            "Muesli floconneux aux fruits ou fruits secs (non enrichi en vitamines et minéraux)",
          ef: "0.19",
        },
        { nom: "Flocon d'avoine précuit", ef: "0.32" },
        { nom: "Lapin, viande braisée", ef: "1.13" },
        { nom: "Lapin, viande crue", ef: "0.83" },
        { nom: "Lapin, viande cuite", ef: "1.13" },
        { nom: "Lapin de garenne, viande, crue", ef: "0.83" },
        { nom: "Lapin de garenne, viande, cuite", ef: "1.13" },
        { nom: "Poule, viande et peau, crue", ef: "0.83" },
        { nom: "Poule, viande ,crue", ef: "0.83" },
        { nom: "Poulet, cuisse, viande et peau, cru", ef: "0.83" },
        { nom: "Poulet, viande, crue", ef: "0.66" },
        {
          nom: "Poulet, cuisse, viande et peau, rôtie/cuite au four",
          ef: "1.13",
        },
        { nom: "Poulet, viande et peau, rôti/cuit au four", ef: "0.90" },
        { nom: "Poulet, cuisse, viande, rôti/cuit au four", ef: "1.13" },
        { nom: "Poulet (var. blanc), viande et peau, cru", ef: "0.83" },
        { nom: "Poulet fermier, viande et peau, cru", ef: "0.83" },
        { nom: "Poule, cuisse, crue", ef: "0.83" },
        { nom: "Poulet, viande et peau, cru", ef: "0.66" },
        { nom: "Poulet, filet, sans peau, cru", ef: "0.82" },
        { nom: "Poulet, filet, sans peau, cuit", ef: "1.11" },
        { nom: "Poulet, haut de cuisse, viande, cru", ef: "0.83" },
        { nom: "Poulet éviscéré sans abats, cru", ef: "0.83" },
        { nom: "Poulet, pilon, cru", ef: "0.83" },
        { nom: "Poulet, aile, viande et peau, cru", ef: "0.83" },
        { nom: "Poulet, cuisse, viande, cru", ef: "0.83" },
        { nom: "Poulet, croquette panée ou nuggets", ef: "0.85" },
        { nom: "Poulet, poitrine, viande et peau, cru", ef: "0.82" },
        { nom: "Poulet, cuisse, viande, bouilli/cuit à l'eau", ef: "1.13" },
        {
          nom: "Poulet, cuisse, viande et peau, bouilli/cuit à l'eau",
          ef: "1.13",
        },
        {
          nom: "Poulet, poitrine, viande et peau, rôti/cuit au four",
          ef: "1.11",
        },
        { nom: "Poulet, aile, viande et peau, rôti/cuit au four", ef: "1.13" },
        { nom: "Poulet, manchons marinés, rôtis/cuits au four", ef: "0.87" },
        { nom: "Poulet, escalope panée", ef: "1.13" },
        { nom: "Chapon, viande et peau, cru", ef: "0.83" },
        { nom: "Chapon, viande et peau, rôti/cuit au four", ef: "1.13" },
        { nom: "Caille, viande et peau, cuite", ef: "1.13" },
        { nom: "Canard, viande et peau, rôti/cuit au four", ef: "1.13" },
        { nom: "Canard, viande, crue", ef: "0.83" },
        { nom: "Canard, viande, rôtie/cuite au four", ef: "1.13" },
        { nom: "Canard, cuisse avec peau, sans os, crue", ef: "0.83" },
        { nom: "Canard, viande et peau, cru", ef: "0.83" },
        { nom: "Canard, magret, grillé/poêlé", ef: "1.11" },
        { nom: "Canard, magret, cru", ef: "1.11" },
        { nom: "Dinde, viande et peau, crue", ef: "0.66" },
        { nom: "Dinde, viande, crue", ef: "0.66" },
        { nom: "Dinde, viande, rôtie/cuite au four", ef: "0.90" },
        { nom: "Dinde, escalope, crue", ef: "0.82" },
        { nom: "Dinde, cuisse, viande et peau, crue", ef: "0.83" },
        { nom: "Dinde, escalope, sautée/poêlée", ef: "1.09" },
        { nom: "Dinde, cuisse, viande sans peau, crue", ef: "0.66" },
        { nom: "Dinde, escalope, rôtie/cuite au four", ef: "1.11" },
        { nom: "Dinde, aile, crue", ef: "0.83" },
        {
          nom: "Dinde, escalope viennoise ou milanaise ou escalope panée",
          ef: "0.81",
        },
        { nom: "Faisan, viande, rôtie/cuite au four", ef: "1.10" },
        { nom: "Oie, viande crue", ef: "0.83" },
        { nom: "Oie, viande et peau, crue", ef: "0.83" },
        { nom: "Oie, viande, rôtie/cuite au four", ef: "1.13" },
        { nom: "Oie, viande et peau, rôtie/cuite au four", ef: "1.13" },
        { nom: "Pigeon, viande, rôtie/cuite au four", ef: "1.13" },
        { nom: "Pintade, crue", ef: "0.83" },
        { nom: "Pintade, poitrine, crue", ef: "0.82" },
        { nom: "Pintade, cuisse, crue", ef: "0.83" },
        { nom: "Base de pizza à la crème", ef: "0.40" },
        { nom: "Pâte à pizza crue", ef: "0.18" },
        { nom: "Base de pizza tomatée", ef: "0.17" },
        { nom: "Chips de crevette", ef: "0.42" },
        { nom: "Chips de maïs ou tortilla chips", ef: "0.29" },
        {
          nom: "Biscuit apéritif soufflé, à base de pomme de terre",
          ef: "0.26",
        },
        { nom: "Biscuit apéritif, mini bretzel ou sticks", ef: "0.26" },
        {
          nom: "Biscuit apéritif soufflé, à base de pomme de terre et de soja",
          ef: "0.26",
        },
        {
          nom: "Biscuit apéritif soufflé, à base de maïs, sans cacahuète",
          ef: "0.26",
        },
        {
          nom: "Biscuit apéritif, crackers, garni ou fourré, au fromage",
          ef: "0.26",
        },
        { nom: "Biscuit apéritif, crackers, nature", ef: "0.26" },
        {
          nom: "Biscuit apéritif, crackers, nature, allégé en matière grasse",
          ef: "0.26",
        },
        {
          nom: "Biscuit apéritif soufflé, à base de maïs, à la cacahuète",
          ef: "0.26",
        },
        {
          nom: "Biscuit apéritif à base de pomme de terre, type tuile salée",
          ef: "0.26",
        },
        {
          nom: "Cacahuètes (arachide) enrobées d'un biscuit, pour apéritif",
          ef: "0.47",
        },
        { nom: "Biscuit apéritif feuilleté", ef: "0.26" },
        {
          nom: "Crêpe dentelle (pour apéritif) au fromage, préemballée",
          ef: "0.26",
        },
        {
          nom: "Croûton à l'ail aux fines herbes ou aux oignons, préemballé",
          ef: "0.86",
        },
        { nom: "Milk-shake, provenant de fast food", ef: "0.16" },
        { nom: "Crème dessert au chocolat, rayon frais", ef: "0.30" },
        { nom: "Mousse au chocolat (base laitière), rayon frais", ef: "0.86" },
        { nom: "Crème caramel, rayon frais", ef: "0.25" },
        { nom: "Mousse au chocolat traditionnelle, rayon frais", ef: "0.86" },
        {
          nom:
            "Crème aux œufs (petit pot de crème chocolat, vanille, etc.), rayon frais",
          ef: "0.38",
        },
        { nom: "Riz au lait, rayon frais", ef: "0.22" },
        { nom: "Crème brûlée, rayon frais", ef: "0.32" },
        { nom: "Crème dessert à la vanille, appertisée", ef: "0.22" },
        { nom: "Ile flottante, rayon frais", ef: "0.25" },
        { nom: "Clafoutis aux fruits, rayon frais", ef: "0.46" },
        { nom: "Semoule au lait, rayon frais", ef: "0.18" },
        { nom: "Liégeois aux fruits", ef: "0.28" },
        { nom: "Mousse aux fruits, rayon frais", ef: "0.45" },
        { nom: "Crème dessert à la vanille, rayon frais", ef: "0.22" },
        { nom: "Gâteau de riz, appertisé", ef: "0.22" },
        { nom: "Gâteau au chocolat, cœur fondant, rayon frais", ef: "0.84" },
        {
          nom:
            "Mousse liégeoise (chocolat, café, caramel ou vanille), rayon frais",
          ef: "0.41",
        },
        { nom: "Pain perdu", ef: "0.27" },
        { nom: "Crème dessert au café, rayon frais", ef: "0.22" },
        { nom: "Crème dessert au caramel, rayon frais", ef: "0.22" },
        { nom: "Pêche melba", ef: "0.28" },
        { nom: "Dessert glacé type mystère ou vacherin", ef: "0.28" },
        {
          nom: "Glace ou crème glacée, bâtonnet, enrobé de chocolat",
          ef: "0.28",
        },
        { nom: "Crème dessert au chocolat, appertisée", ef: "0.30" },
        { nom: "Glace ou crème glacée, cône (taille standard)", ef: "0.28" },
        { nom: "Dessert glacé, type sundae", ef: "0.28" },
        { nom: "Glace ou crème glacée, en bac", ef: "0.28" },
        { nom: "Dessert glacé feuilleté, à partager", ef: "0.28" },
        { nom: "Glace au yaourt", ef: "0.28" },
        { nom: "Omelette norvégienne", ef: "0.28" },
        { nom: "Poire belle Hélène", ef: "0.28" },
        { nom: "Glace ou crème glacée, gourmande, en bac", ef: "0.28" },
        { nom: "Glace ou crème glacée, gourmande, en pot", ef: "0.28" },
        { nom: "Glace ou crème glacée, mini cône", ef: "0.28" },
        { nom: "Glace ou crème glacée, pot individuel", ef: "0.28" },
        { nom: "Sorbet, en bac", ef: "0.46" },
        { nom: "Glace à l'eau", ef: "0.19" },
        { nom: "Nougat glacé", ef: "0.28" },
        { nom: "Citron givré ou Orange givrée (sorbet)", ef: "0.28" },
        { nom: "Glace ou crème glacée, petit pot enfant", ef: "0.28" },
        { nom: "Coupe glacée type café ou chocolat liégeois", ef: "0.28" },
        { nom: "Bûche glacée", ef: "0.28" },
        {
          nom: "Coupe glacée parfum pêche Melba ou poire Belle-Hélène",
          ef: "0.28",
        },
        { nom: "Crème anglaise, préemballée", ef: "0.23" },
        { nom: "Crème pâtissière", ef: "0.18" },
        { nom: "Cervelle, agneau, crue", ef: "2.50" },
        { nom: "Cervelle, agneau, cuite", ef: "3.46" },
        { nom: "Cervelle, porc, braisée", ef: "0.40" },
        { nom: "Cervelle, porc, crue", ef: "0.27" },
        { nom: "Cervelle, veau, crue", ef: "1.74" },
        { nom: "Cervelle, veau, cuite", ef: "2.41" },
        { nom: "Coeur, boeuf, cru", ef: "2.20" },
        { nom: "Coeur, boeuf, cuit", ef: "3.04" },
        { nom: "Coeur, poulet, cru", ef: "0.21" },
        { nom: "Coeur, dinde, cru", ef: "0.21" },
        { nom: "Coeur, poulet, cuit", ef: "0.32" },
        { nom: "Coeur, dinde, cuit", ef: "0.32" },
        { nom: "Coeur, agneau, cru", ef: "2.50" },
        { nom: "Coeur, agneau, cuit", ef: "3.46" },
        { nom: "Coeur, porc, cru", ef: "0.27" },
        { nom: "Coeur, veau, cru", ef: "1.74" },
        { nom: "Foie, agneau, cru", ef: "2.50" },
        { nom: "Foie, agneau, cuit", ef: "3.46" },
        { nom: "Foie, génisse, cru", ef: "2.20" },
        { nom: "Foie, génisse, cuit", ef: "3.04" },
        { nom: "Foie, veau, cru", ef: "1.74" },
        { nom: "Foie, veau, cuit", ef: "2.41" },
        { nom: "Foie, volaille, cru", ef: "0.21" },
        { nom: "Foie, lapin, cru", ef: "0.21" },
        { nom: "Foie, poulet, cru", ef: "0.21" },
        { nom: "Foie, porc, cuit", ef: "0.40" },
        { nom: "Foie, dinde, cru", ef: "0.21" },
        { nom: "Foie, poulet, cuit", ef: "0.32" },
        { nom: "Foie, dinde, cuit", ef: "0.32" },
        { nom: "Foie, porc, cru", ef: "0.27" },
        { nom: "Foie, oie, cru", ef: "0.21" },
        { nom: "Foie, canard, cru", ef: "0.21" },
        { nom: "Langue, veau, cuite", ef: "2.41" },
        { nom: "Langue, boeuf, crue", ef: "2.20" },
        { nom: "Langue, boeuf, cuite", ef: "3.04" },
        { nom: "Langue, veau, crue", ef: "1.74" },
        { nom: "Langue, porc, crue", ef: "0.27" },
        { nom: "Ris, agneau, cru", ef: "3.13" },
        { nom: "Ris, agneau, cuit", ef: "4.33" },
        { nom: "Ris, veau, cru", ef: "2.18" },
        { nom: "Ris, veau, braisé ou sauté/poêlé", ef: "3.00" },
        { nom: "Rognon, boeuf, cru", ef: "2.20" },
        { nom: "Rognon, boeuf, cuit", ef: "3.04" },
        { nom: "Rognon, porc, cru", ef: "0.27" },
        { nom: "Rognon, porc, cuit", ef: "0.40" },
        { nom: "Rognon, agneau, braisé", ef: "3.46" },
        { nom: "Rognon, agneau, cru", ef: "2.50" },
        { nom: "Rognon, veau, braisé ou sauté/poêlé", ef: "2.39" },
        { nom: "Rognon, veau, cru", ef: "1.74" },
        { nom: "Tripes, boeuf, crues", ef: "2.75" },
        { nom: "Sang, boeuf, cru", ef: "2.75" },
        { nom: "Gésier, poulet, cru", ef: "0.21" },
        { nom: "Substitut de repas hypocalorique, crème dessert", ef: "0.25" },
        { nom: "Substitut de repas hypocalorique, prêt à boire", ef: "0.25" },
        {
          nom:
            "Substitut de repas hypocalorique, poudre reconstituée avec lait écrémé",
          ef: "0.25",
        },
        {
          nom:
            "Substitut de repas hypocalorique, poudre reconstituée avec lait écrémé, type milk-shake",
          ef: "0.25",
        },
        { nom: "Lécithine de soja", ef: "0.41" },
        {
          nom: "Plat légumes, avec féculent et viande/poisson, dès 6-8 mois",
          ef: "0.33",
        },
        {
          nom: "Plat légumes, avec féculent et viande/poisson, dès 8-12 mois",
          ef: "0.33",
        },
        {
          nom: "Plat légumes, avec féculent et viande/poisson, dès 12 mois",
          ef: "0.33",
        },
        {
          nom: "Plat légumes, avec féculent et viande/poisson, dès 18 mois",
          ef: "0.33",
        },
        { nom: "Meloukhia, feuilles de corète séchées, en poudre", ef: "0.14" },
        { nom: "Frik (blé dur immature concassé), cru", ef: "0.27" },
        { nom: "Frik (blé dur immature concassé), cuit, non salé", ef: "0.12" },
        { nom: "Khatfa feuille de brick, préemballée", ef: "0.14" },
        { nom: "Banane plantain, crue", ef: "0.13" },
        { nom: "Banane plantain, cuite", ef: "0.26" },
        { nom: "Taro, tubercule, cru", ef: "0.09" },
        { nom: "Taro, tubercule, cuit", ef: "0.22" },
        { nom: "Igname, épluchée, crue", ef: "0.09" },
        { nom: "Igname, épluchée, bouillie/cuite à l'eau", ef: "0.14" },
        { nom: "Manioc, racine crue", ef: "0.12" },
        { nom: "Manioc, racine cuite", ef: "0.19" },
        { nom: "Fruit à pain, cru", ef: "0.24" },
        { nom: "Gombo, fruit, cuit", ef: "0.23" },
        {
          nom:
            "Eau minérale Abatilles, embouteillée, non gazeuse, faiblement minéralisée (Arcachon, 33)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Aix-les-Bains, embouteillée, non gazeuse, faiblement minéralisée (Aix-les-Bains, 73)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Aizac, embouteillée, gazeuse, faiblement minéralisée (Aizac, 07)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Amanda, embouteillée, non gazeuse, fortement minéralisée (St-Amand, 59)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Arcens, embouteillée, gazeuse, moyennement minéralisée (Arcens, 07)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Ardesy, embouteillée, gazeuse, fortement minéralisée (Ardes, 63)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Auvergne, embouteillée, gazeuse, fortement minéralisée (Cornillon, 38)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Celtic, embouteillée, gazeuse ou non gazeuse, très faiblement minéralisée (Niederbronn, 67)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Chambon, embouteillée, non gazeuse, faiblement minéralisée (Chambon, 45)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Chantemerle, embouteillée, non gazeuse, faiblement minéralisée (Le Pestrin, 07)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Chateauneuf, embouteillée, gazeuse, fortement minéralisée (Chateauneuf, 63)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Chateldon, embouteillée, gazeuse, fortement minéralisée (Chateldon, 63)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Clos de l'Abbaye, embouteillée, non gazeuse, moyennement minéralisée (St-Amand, 59)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Contrex, embouteillée, non gazeuse, fortement minéralisée (Contrexéville, 88)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Dax, embouteillée, non gazeuse, moyennement minéralisée (Dax, 40)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Didier, embouteillée, gazeuse, fortement minéralisée (Martinique)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Didier, embouteillée non gazeuse, fortement minéralisée (Martinique)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Evian, embouteillée, non gazeuse, faiblement minéralisée (Evian, 74)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Hépar, embouteillée, non gazeuse, fortement minéralisée (Vittel, 88)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Hydroxydase, embouteillée, gazeuse, fortement minéralisée (Le Breuil sur Couze, 63)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Vernière, embouteillée, gazeuse, moyennement minéralisée (Les Aires, 34)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Luchon, embouteillée, non gazeuse, faiblement minéralisée (Luchon, 31)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Mont-Roucous, embouteillée, très faiblement minéralisée (Lacaune, 81)",
          ef: "0.03",
        },
        {
          nom:
            "Eau de source Ogeu, embouteillée, faiblement minéralisée (Ogeu, 64)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Orée du bois, embouteillée, non gazeuse, moyennement minéralisée (St-Amand, 59)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Orezza, embouteillée, gazeuse, moyennement minéralisée (Rapaggio, 20B)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Parot, embouteillée, gazeuse, moyennement minéralisée (St-Romain-le-Puy, 42)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Plancoet, embouteillée, gazeuse ou non gazeuse, faiblement minéralisée (Plancoet, 22)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Propiac, embouteillée, non gazeuse, fortement minéralisée (Propiac, 26)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Puits St-Georges, embouteillée, gazeuse, moyennement minéralisée (St-Romain-le-Puy, 42)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Quézac, embouteillée, gazeuse, moyennement minéralisée (Quézac, 48)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Reine des basaltes, embouteillée, gazeuse, moyennement minéralisée (Asperjoc, 07)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Rozana, embouteillée, gazeuse, fortement minéralisée (Beauregard, 63)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Sail-les-Bains, embouteillée, non gazeuse, faiblement minéralisée (Sail-les-Bains, 42)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Salvetat, embouteillée, gazeuse, moyennement minéralisée (La Salvetat, 34)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Soultzmatt , embouteillée, gazeuse, moyennement minéralisée ( Soultzmatt, 68)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale St-Amand, embouteillée, gazeuse ou non gazeuse, moyennement minéralisée (St-Amand, 59)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale St-Antonin, embouteillée, non gazeuse, fortement minéralisée (St-Antonin-Noble-Val, 82)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale St-Diéry, embouteillée, gazeuse, fortement minéralisée (St-Diéry, 63)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Ste-Marguerite, embouteillée, gazeuse, moyennement minéralisée (St-Maurice, 63)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale St-Yorre, embouteillée, gazeuse, fortement minéralisée (Saint-Yorre, 03)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Thonon, embouteillée, non gazeuse, faiblement minéralisée (Thonon, 74)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Ventadour, embouteillée, gazeuse, faiblement minéralisée (Le Pestrin, 07)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Vernet, embouteillée, gazeuse, faiblement minéralisée (Prades, 07)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Vichy Célestins, embouteillée, gazeuse, fortement minéralisée (Saint-Yorre, 03)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Vittel, embouteillée, non gazeuse, moyennement minéralisée (Vittel, 88)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Volvic, embouteillée, non gazeuse, faiblement minéralisée (Volvic, 63)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Volvic active, embouteillée, gazeuse, faiblement minéralisée (Volvic, 63)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Wattwiller, embouteillée, gazeuse ou non gazeuse, faiblement minéraliséee (Wattwiller, 68)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Perrier, embouteillée, gazeuse, faiblement minéralisée (Vergèse, 30)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Badoit, embouteillée, gazeuse, moyennement minéralisée (St-Galmier, 42)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Avra, embouteillée, non gazeuse, faiblement minéralisée (Grèce)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Beckerich, embouteillée, non gazeuse, faiblement minéralisée (Luxembourg)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Caramulo, embouteillée, non gazeuse, très faiblement minéralisée (Portugal)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Chaudfontaine, embouteillée, non gazeuse, faiblement minéralisée (Belgique)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Christinen Brunnen, embouteillée, non gazeuse, moyennement minéralisée (Allemagne)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Courmayeur, embouteillée, non gazeuse, fortement minéralisée (Italie)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Highland spring, embouteillée, non gazeuse, faiblement minéralisée (Écosse)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Levissima, embouteillée, non gazeuse, faiblement minéralisée (Italie)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Luso, embouteillée, non gazeuse, très faiblement minéralisée (Portugal)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Néro, embouteillée, non gazeuse, faiblement minéralisée (Grèce)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Penacova, embouteillée, non gazeuse, très faiblement minéralisée (Portugal)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale San Benedetto, embouteillée, faiblement minéralisée (Italie)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale San Bernardo, embouteillée, très faiblement minéralisée (Italie)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale San Pellegrino, embouteillée, gazeuse, moyennement minéralisée (Italie)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Spa-Reine, embouteillée, gazeuse ou non non gazeuse, moyennement minéralisée (Belgique)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Talians, embouteillée, non gazeuse, fortement minéralisée (Italie)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Valvert, embouteillée, non gazeuse, faiblement minéralisée (Belgique)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Appollinaris, embouteillée, non gazeuse, fortement minéralisée (Allemagne)",
          ef: "0.03",
        },
        {
          nom: "Eau de source Cristaline, embouteillée, non gazeuse",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Biovive, embouteillée, non gazeuse, faiblement minéralisée (Dax, 40)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale La Cairolle, embouteillée, non gazeuse, fortement minéralisée (Les Aires, 34)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Cilaos, embouteillée, gazeuse, fortement minéralisée (Cilaos, 974)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale La Française, embouteillée, non gazeuse, fortement minéralisée (Propiac, 26)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Montcalm, embouteillée, non gazeuse, très faiblement minéralisée (Auzat, 09)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Montclar, embouteillée, non gazeuse, faiblement minéralisée (Montclar, 04)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Nessel, embouteillée, gazeuse, moyennement minéralisée (Soultzmatt, 68)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Ogeu, embouteillée, gazeuse, faiblement minéralisée (Ogeu-les-Bains, 64)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Ogeu, embouteillée, non gazeuse, faiblement minéralisée (Ogeu-les-Bains, 64)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Prince Noir, embouteillée, non gazeuse, fortement minéralisée (St-Antonin-Noble-Val, 82)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale St-Alban, embouteillée, gazeuse, moyennement minéralisée (St-Alban, 42)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale St-Géron, embouteillée, gazeuse, moyennement minéralisée (St-Géron, 43)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale St-Michel-de-Mourcairol, embouteillée, gazeuse, moyennement minéralisée (Les Aires, 34)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Treignac, embouteillée, non gazeuse, très faiblement minéralisée (Treignac, 19)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Vals, embouteillée, gazeuse, moyennement minéralisée (Vals-les-Bains, 07)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Vauban, embouteillée, non gazeuse, moyennement minéralisée (St-Amand-les-Eaux, 59)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Carola, embouteillée, gazeuse ou non gazeuse, moyennement minéralisée (Ribeauville, 68)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Mont-Blanc, embouteillée, non gazeuse, faiblement minéralisée (Italie)",
          ef: "0.03",
        },
        {
          nom:
            "Eau minérale Eden (La Goa), embouteillée, non gazeuse, faiblement minéralisée (Suisse)",
          ef: "0.03",
        },
        { nom: "Pâte à pizza cuite", ef: "0.18" },
      ],
      currentPage: 1,
      foodsPerPage: 52,
      search: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  handleFilter(e) {
    if (e.key === "Enter") {
      this.setState({
        search: e.target.value,
      });
    }
  }
  prec() {
    if (this.state.currentPage === 1) {
      this.setState({
        currentPage: Math.ceil(
          this.state.foods.filter((food) =>
            food.nom
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                this.state.search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              )
          ).length / this.state.foodsPerPage
        ),
      });
    } else {
      this.setState({
        currentPage: -1 + this.state.currentPage,
      });
    }
  }
  suiv() {
    if (
      this.state.currentPage ===
      Math.ceil(
        this.state.foods.filter((food) =>
          food.nom
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              this.state.search
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
        ).length / this.state.foodsPerPage
      )
    ) {
      this.setState({
        currentPage: 1,
      });
    } else {
      this.setState({
        currentPage: 1 + this.state.currentPage,
      });
    }
  }
  first() {
    this.setState({ currentPage: 1 });
  }
  last() {
    this.setState({
      currentPage: Math.ceil(
        this.state.foods.filter((food) =>
          food.nom
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              this.state.search
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
        ).length / this.state.foodsPerPage
      ),
    });
  }
  render() {
    const { foods, currentPage, foodsPerPage } = this.state;

    // Logic for displaying current foods
    const indexOfLastFood = currentPage * foodsPerPage;
    const indexOfFirstFood = indexOfLastFood - foodsPerPage;
    const currentfoods = foods
      .filter((food) =>
        food.nom
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            this.state.search
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
      .slice(indexOfFirstFood, indexOfLastFood);

    const renderfoods = currentfoods.map((food) => {
      return <Card key={food.nom} value={food.nom} result={food.ef} />;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (
      let i = 1;
      i <=
      Math.ceil(
        foods.filter((food) =>
          food.nom
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              this.state.search
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
        ).length / foodsPerPage
      );
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={`${this.state.currentPage === number ? "current" : ""} ${
            number < this.state.currentPage - 5 ||
            number > this.state.currentPage + 5
              ? "hidden"
              : ""
          }`}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="food">
        <input
          type="search"
          placeholder="Rechercher un aliment"
          onKeyDown={this.handleFilter}
        />
        {this.state.search === "" ? (
          <p className="block">Tous les aliments de la base de données.</p>
        ) : (
          <p className="block">Vous recherchez {this.state.search}.</p>
        )}
        {renderfoods}
        <ul id="page-numbers">
          <li onClick={this.first.bind(this)}>First</li>
          <li onClick={this.prec.bind(this)}>{"préc. <"}</li>
          {renderPageNumbers}
          <li onClick={this.suiv.bind(this)}>{"> suiv."}</li>
          <li onClick={this.last.bind(this)}>Last</li>
        </ul>
      </div>
    );
  }
}
export default Food;
