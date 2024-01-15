import { Request, Response } from "express"

const volumeTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const volume = phi * r * r * t
        return response.status(200)
            .json({
                status: true,
                r,
                t,
                volume 
            })
    } catch (error) {
        return response.status(500)
            .json({
                status: false,
                message: error
            })
    }
}

const luasPermukaanTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const luasPermukaan = (2 * phi * r * t) + (2 * phi * r * t)
        return response.status(200)
            .json({
                status: true,
                r,
                t,
                luasPermukaan
            })
    } catch (error) {
        return response.status(500)
            .json({
                status: false,
                message: error
            })
    }
}

const volumeKubus = (request: Request, response: Response) => {
    try {
        const r: number = Number(request.body.r)
        const volume = r * r * r
        return response.status(200)
            .json({
                status: true,
                r,
                volume 
            })
    } catch (error) {
        return response.status(500)
            .json({
                status: false,
                message: error
            })
    }
}

const luasPermukaanKubus = (request: Request, response: Response) => {
    try {
        const r: number = Number(request.body.r)
        const luasPermukaan = 6 * r * r 
        return response.status(200)
            .json({
                status: true,
                r,
                luasPermukaan
            })
    } catch (error) {
        return response.status(500)
            .json({
                status: false,
                message: error
            })
    }
}

const volumeBalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const volume = p * l * t
        return response.status(200)
            .json({
                status: true,
                p,
                l,
                t,
                volume 
            })
    } catch (error) {
        return response.status(500)
            .json({
                status: false,
                message: error
            })
    }
}

const luasPermukaanBalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const luasPermukaan = (2 * p * l) + (2 * p * t) + (2 * l * t)
        return response.status(200)
            .json({
                status: true,
                p,
                l,
                t,
                luasPermukaan
            })
    } catch (error) {
        return response.status(500)
            .json({
                status: false,
                message: error
            })
    }
}

export {volumeTabung, luasPermukaanTabung, volumeKubus, luasPermukaanKubus, volumeBalok, luasPermukaanBalok}