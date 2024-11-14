import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, styled, TextField, Button, Typography } from "@mui/material";
import SemRumoXEmbauba from "../../../../assets/images/SemRumoXEmbauba.png";
import FolderIcon from '@mui/icons-material/Folder';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Hero = () => {
    const [mainValue, setMainValue] = useState(0); // Estado da navegação principal
    const [formValue, setFormValue] = useState(0); // Estado da navegação interna do Formulário

    const StyledHero = styled("div")({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
    });
    const StyledNav = styled("div")({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    });

    const StyledLogo = styled("img")({
        width: "30%",
    });

    const renderFormContent = () => {
        switch (formValue) {
            case 0:
                return (
                    <>
                        <Typography>Subir Para Nuvem</Typography>
                        <TextField label="Título da obra" variant="outlined" fullWidth required />
                        <TextField label="Tipo" variant="outlined" fullWidth required />
                        <TextField label="CODEC" variant="outlined" fullWidth required />
                        <TextField label="Mescla" variant="outlined" fullWidth required />
                        <TextField label="Acessibilidade" variant="outlined" fullWidth required />
                        <TextField label="Serviço" variant="outlined" fullWidth required />
                        <TextField label="Observação" variant="outlined" fullWidth required />
                        <TextField label="Prazo para entrega" placeholder="Formato: DD/MM/AAAA ; 00:00" variant="outlined" fullWidth required />
                    </>
                );
            case 1:
                return (
                    <>
                        <Typography>Encode</Typography>
                        <TextField label="Titulo da obra" variant="outlined" fullWidth />
                        <TextField label="Janela de exibição" variant="outlined" fullWidth required />
                        <TextField label="Tipo" variant="outlined" fullWidth required />
                        <TextField label="Quadros por segundo" variant="outlined" fullWidth required />
                        <TextField label="Aspecto" variant="outlined" fullWidth required />
                        <TextField label="Mescla" variant="outlined" fullWidth required />
                        <TextField label="Observação" variant="outlined" required fullWidth />
                        <TextField label="Prazo para entrega" placeholder="Formato: DD/MM/AAAA ; 00:00" variant="outlined" required fullWidth />
                    </>
                );
            case 2:
                return (
                    <>
                        <Typography>Criação de arquivo</Typography>
                        <TextField label="Titulo da obra" variant="outlined" fullWidth />
                        <TextField label="Janela de exibição" variant="outlined" fullWidth required />
                        <TextField label="Tipo" variant="outlined" fullWidth required />
                        <TextField label="Quadros por segundo" variant="outlined" fullWidth required />
                        <TextField label="Aspecto" variant="outlined" fullWidth required />
                        <TextField label="Mescla" variant="outlined" fullWidth required />
                        <TextField label="Acessibilidade" variant="outlined" fullWidth required />
                        <TextField label="Observação" variant="outlined" required fullWidth />
                        <TextField label="Prazo para entrega" placeholder="Formato: DD/MM/AAAA ; 00:00" variant="outlined" fullWidth />
                    </>
                );
            case 3:
                return (
                    <>
                        <Typography>Cópias DCPs</Typography>
                        <TextField label="Filme(s) para adicionar" variant="outlined" fullWidth required />
                        <TextField label="Trailer(s) para adicionar" variant="outlined" fullWidth required />
                        <TextField label="Quantidade de HDs" variant="outlined" fullWidth required />
                        <TextField label="Prazo para entrega" placeholder="Formato: DD/MM/AAAA ; 00:00" variant="outlined" fullWidth required />
                    </>
                );
            case 4:
                return (
                    <>
                        <Typography>Outros</Typography>
                        <TextField label="Nome do Arquivo" variant="outlined" fullWidth required />
                        <TextField label="Descrição" variant="outlined" fullWidth multiline rows={4} required />
                        <TextField label="Prazo para entrega" placeholder="Formato: DD/MM/AAAA ; 00:00" variant="outlined" fullWidth required />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <StyledHero>
            <StyledNav>
                <StyledLogo src={SemRumoXEmbauba} alt="Logo" />
                <BottomNavigation
                showLabels
                value={mainValue}
                onChange={(event, newValue) => setMainValue(newValue)}
            >
                <BottomNavigationAction label="Acervo" icon={<FolderIcon />} />
                <BottomNavigationAction label="Formulário" icon={<FormatListBulletedIcon />} />
            </BottomNavigation>

            </StyledNav>
            

            {mainValue === 1 && (
                <>
                    <BottomNavigation
                        showLabels
                        value={formValue}
                        onChange={(event, newValue) => setFormValue(newValue)}
                    >
                        <BottomNavigationAction label="Subir Para Nuvem" />
                        <BottomNavigationAction label="Encode" />
                        <BottomNavigationAction label="Criação de arquivo" />
                        <BottomNavigationAction label="Cópias DCPs" />
                        <BottomNavigationAction label="Outros" />
                    </BottomNavigation>

                    <form style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "400px" }}>
                        {renderFormContent()}
                        <Button type="submit" variant="contained" color="primary">Salvar</Button>
                    </form>
                </>
            )}
        </StyledHero>
    );
};

export default Hero;
