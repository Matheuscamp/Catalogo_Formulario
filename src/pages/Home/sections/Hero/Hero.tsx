import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, styled, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import SemRumoXEmbauba from "../../../../assets/images/SemRumoXEmbauba.png";
import FolderIcon from '@mui/icons-material/Folder';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Hero = () => {
    const [mainValue, setMainValue] = useState(0); // Estado para a navegação principal
    const [formValue, setFormValue] = useState(0); // Estado para a navegação interna do Formulário
    const [type, setType] = useState(''); // Estado para o tipo de mídia
    const [codec, setCodec] = useState(''); // Estado para o codec
    const [mescla, setMescla] = useState(''); // Estado para o mescla
    const [acessibilidade, setAcessibilidade] = useState(''); // Estado para o Acessibilidade

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleCodecChange = (event) => {
        setCodec(event.target.value);
    };

    const handleMesclaChange = (event) => {
        setMescla(event.target.value);
    };

    const handleAcessibilidadeChange = (event) => {
        setAcessibilidade(event.target.value);
    };

    const StyledHero = styled("div")(() => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
    }));

    const StyledLogo = styled("img")(() => ({
        width: "30%",
    }));

    return (
        <StyledHero>
            {/* Navegação Principal */}
            <BottomNavigation
                showLabels
                value={mainValue}
                onChange={(event, newValue) => {
                    setMainValue(newValue);
                }}
            >
                <BottomNavigationAction label="Acervo" icon={<FolderIcon />} />
                <BottomNavigationAction label="Formulário" icon={<FormatListBulletedIcon />} />
            </BottomNavigation>

            <StyledLogo src={SemRumoXEmbauba} alt="Logo" />

            {/* Navegação Interna do Formulário */}
            {mainValue === 1 && (
                <>
                    <BottomNavigation
                        showLabels
                        value={formValue}
                        onChange={(event, newValue) => {
                            setFormValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Subir Para Nuvem" />
                        <BottomNavigationAction label="Encode" />
                        <BottomNavigationAction label="Criação de arquivo" />
                        <BottomNavigationAction label="Cópias DCPs" />
                        <BottomNavigationAction label="Outros" />
                    </BottomNavigation>

                    {/* Conteúdo do Formulário com base na opção selecionada */}
                    <form style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "400px" }}>
                        {formValue === 0 && (
                            <>
                                <Typography>Subir Para Nuvem</Typography>
                                <TextField label="Título da obra" variant="outlined" fullWidth />
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="type-label">Tipo</InputLabel>
                                        <Select
                                            labelId="type-label"
                                            id="type"
                                            value={type}
                                            label="Tipo"
                                            onChange={handleTypeChange}
                                        >
                                            <MenuItem value={"Filme"}>Filme</MenuItem>
                                            <MenuItem value={"Trailer"}>Trailer</MenuItem>
                                            <MenuItem value={"Divulgação"}>Divulgação</MenuItem>
                                            <MenuItem value={"Outro"}>Outro</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="codec-label">CODEC</InputLabel>
                                        <Select
                                            labelId="codec-label"
                                            id="codec"
                                            value={codec}
                                            label="Codec"
                                            onChange={handleCodecChange}
                                        >
                                            <MenuItem value={"H264 Cine"}>H264 Cine</MenuItem>
                                            <MenuItem value={"H264 Web"}>H264 Web</MenuItem>
                                            <MenuItem value={"ProRes"}>ProRes</MenuItem>
                                            <MenuItem value={"DNx"}>DNx</MenuItem>
                                            <MenuItem value={"DCP"}>DCP</MenuItem>
                                            <MenuItem value={"XDCAM"}>XDCAM</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="mescla-label">Mescla</InputLabel>
                                        <Select
                                            labelId="mescla-label"
                                            id="mescla"
                                            value={mescla}
                                            label="Mescla"
                                            onChange={handleMesclaChange}
                                        >
                                            <MenuItem value={20}>2.0</MenuItem>
                                            <MenuItem value={51}>5.1</MenuItem>
                                            <MenuItem value={2051}>2.0 + 5.1</MenuItem>
                                            <MenuItem value={5120}>5.1 + 2.0</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="mescla-label">Acessibilidade</InputLabel>
                                        <Select
                                            labelId="mescla-label"
                                            id="acessibilidade"
                                            value={acessibilidade}
                                            label="Acessibilidade"
                                            onChange={handleAcessibilidadeChange}
                                        >
                                            <MenuItem value={"Não"}>Não</MenuItem>
                                            <MenuItem value={"CC"}>CC</MenuItem>
                                            <MenuItem value={"AD"}>AD</MenuItem>
                                            <MenuItem value={"LIBRAS"}>LIBRAS</MenuItem>
                                            <MenuItem value={"Todas"}>Todas</MenuItem>
                                            <MenuItem value={"Queimada"}>Queimada</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <TextField placeholder="Formato: DD/MM/AAAA ; 00:00 (Será analisado)" label="Prazo para entrega" variant="outlined" fullWidth />
                            </>
                        )}
                        {formValue === 1 && (
                            <>
                                <Typography>Encode</Typography>
                                <TextField placeholder="Formato: DD/MM/AAAA ; 00:00 (Será analisado)" label="Prazo para entrega" variant="outlined" fullWidth />
                            </>
                        )}
                        {formValue === 2 && (
                            <>
                                <Typography>Criação de arquivo</Typography>
                                <TextField label="Nome do Arquivo" variant="outlined" fullWidth />
                                <TextField placeholder="Formato: DD/MM/AAAA ; 00:00 (Será analisado)" label="Prazo para entrega" variant="outlined" fullWidth />
                            </>
                        )}
                        {formValue === 3 && (
                            <>
                                <Typography>Cópias DCPs</Typography>
                                <TextField label="Filme(s) para adicionar" variant="outlined" fullWidth />
                                <TextField label="Trailer(s) para adicionar" variant="outlined" fullWidth />
                                <TextField label="Quantidade de HDs" variant="outlined" fullWidth />
                                <TextField placeholder="Formato: DD/MM/AAAA ; 00:00 (Será analisado)" label="Prazo para entrega" variant="outlined" fullWidth />
                            </>
                        )}
                        {formValue === 4 && (
                            <>
                                <Typography>Outros</Typography>
                                <TextField label="Nome do Arquivo" variant="outlined" fullWidth />
                                <TextField label="Descrição" variant="outlined" fullWidth multiline rows={4} />
                                <TextField placeholder="Formato: DD/MM/AAAA ; 00:00 (Será analisado)" label="Prazo para entrega" variant="outlined" fullWidth />
                            </>
                        )}
                        <Button type="submit" variant="contained" color="primary">Salvar</Button>
                    </form>
                </>
            )}
        </StyledHero>
    );
};

export default Hero;
